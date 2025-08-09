import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Course } from '@/types/course';


type CourseAction =
  | { type: 'SET_FAVORITES'; payload: string[] }
  | { type: 'ADD_FAVORITE'; payload: string }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'SET_COMPARISON'; payload: string[] }
  | { type: 'ADD_TO_COMPARISON'; payload: string }
  | { type: 'REMOVE_FROM_COMPARISON'; payload: string }
  | { type: 'CLEAR_COMPARISON' };


interface CourseState {
  favorites: string[];
  comparison: string[];
}


const initialState: CourseState = {
  favorites: [],
  comparison: []
};


const courseReducer = (state: CourseState, action: CourseAction): CourseState => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    
    case 'ADD_FAVORITE':
      if (state.favorites.includes(action.payload)) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    
    case 'REMOVE_FAVORITE':
      return { 
        ...state, 
        favorites: state.favorites.filter(id => id !== action.payload) 
      };
    
    case 'SET_COMPARISON':
      return { ...state, comparison: action.payload };
    
    case 'ADD_TO_COMPARISON':
      if (state.comparison.includes(action.payload) || state.comparison.length >= 2) {
        return state;
      }
      return { ...state, comparison: [...state.comparison, action.payload] };
    
    case 'REMOVE_FROM_COMPARISON':
      return { 
        ...state, 
        comparison: state.comparison.filter(id => id !== action.payload) 
      };
    
    case 'CLEAR_COMPARISON':
      return { ...state, comparison: [] };
    
    default:
      return state;
  }
};


interface CourseContextType {
  state: CourseState;
  toggleFavorite: (courseId: string) => void;
  addToComparison: (courseId: string) => void;
  removeFromComparison: (courseId: string) => void;
  clearComparison: () => void;
  isFavorite: (courseId: string) => boolean;
  isInComparison: (courseId: string) => boolean;
}


const CourseContext = createContext<CourseContextType | undefined>(undefined);


export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);


  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('course-favorites');
      const savedComparison = localStorage.getItem('course-comparison');
      
      if (savedFavorites) {
        dispatch({ type: 'SET_FAVORITES', payload: JSON.parse(savedFavorites) });
      }
      
      if (savedComparison) {
        dispatch({ type: 'SET_COMPARISON', payload: JSON.parse(savedComparison) });
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }, []);

 
  useEffect(() => {
    try {
      localStorage.setItem('course-favorites', JSON.stringify(state.favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  }, [state.favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('course-comparison', JSON.stringify(state.comparison));
    } catch (error) {
      console.error('Error saving comparison to localStorage:', error);
    }
  }, [state.comparison]);

  
  const toggleFavorite = (courseId: string) => {
    if (state.favorites.includes(courseId)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: courseId });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: courseId });
    }
  };

  const addToComparison = (courseId: string) => {
    dispatch({ type: 'ADD_TO_COMPARISON', payload: courseId });
  };

  const removeFromComparison = (courseId: string) => {
    dispatch({ type: 'REMOVE_FROM_COMPARISON', payload: courseId });
  };

  const clearComparison = () => {
    dispatch({ type: 'CLEAR_COMPARISON' });
  };

  const isFavorite = (courseId: string) => {
    return state.favorites.includes(courseId);
  };

  const isInComparison = (courseId: string) => {
    return state.comparison.includes(courseId);
  };

  const contextValue: CourseContextType = {
    state,
    toggleFavorite,
    addToComparison,
    removeFromComparison,
    clearComparison,
    isFavorite,
    isInComparison
  };

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
};


export const useCourseContext = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};