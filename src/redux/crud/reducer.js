import { ADD_DATA, DELETE_DATA, EDIT_DATA,FETCH_DATA } from './action';

const initialState = {
  data: [],
};

export default function userData(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case DELETE_DATA:
      return {
       data: [...state.data.filter((_, i)=>i!==action.payload
    )
]

      };

    case EDIT_DATA:
      return {
        ...state,
        data: state.data.map((item, i) =>
          i === action.payload.index
            ? { ...item, ...action.payload.updatedItem }
            : item
        ),
      };
    case FETCH_DATA:
  return {
    ...state,
    data: action.payload,
  };


      default:
        return state;
    }
  }