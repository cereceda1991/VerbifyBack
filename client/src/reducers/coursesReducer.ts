import {
  GET_COURSES,
  CREATE_COURSE,
  GET_COURSE_BY_ID,
  DELETE_COURSE_BY_ID,
  UPDATE_COURSE_BY_ID,
  GET_MODULES_FROM_COURSE_BY_ID,
  GET_ALL_COURSES_WITH_MODULES_AND_CLASSES,
} from '../actions/types/types';

const initialState = {
  coursesList: [],
  courseList: null,
  modulesList: [],
  allList: [],
};

export default function coursesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        coursesList: action.payload,
      };
    case CREATE_COURSE:
      return {
        ...state,
      };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        courseList: action.payload,
      };
    case DELETE_COURSE_BY_ID:
      return {
        ...state,
      };
    case UPDATE_COURSE_BY_ID:
      return {
        ...state,
      };
    case GET_MODULES_FROM_COURSE_BY_ID:
      return {
        ...state,
        modulesList: action.payload,
      }
    case GET_ALL_COURSES_WITH_MODULES_AND_CLASSES:
      return {
        ...state,
        allList: action.payload,
      }
    default:
      return state;
  };
};
