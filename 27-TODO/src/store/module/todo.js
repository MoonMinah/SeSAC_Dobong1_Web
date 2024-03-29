const initialState = {
  list: [
    {
      id: 0,
      text: "리액트 공부하기",
      done: false,
    },
    {
      id: 1,
      text: "운동하기",
      done: false,
    },
    {
      id: 2,
      text: "밥먹기",
      done: false,
    },
  ],
  // nextID: 3  --> 이런식으로 추가되고 있다.
};

const CREATE = "todo/CREATE";
const DONE = "todo/DONE";

let count = initialState.list.length;
initialState["nextID"] = count;

export const create = (payload) => ({
  type: CREATE,
  payload, // object {id, text}
});
export const done = (id) => ({
  type: DONE,
  id, // number
});
export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      if (action.payload.text.trim === "") return state;
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((li) => {
          if (li.id === action.id) {
            return {
              ...li,
              done: true,
            };
          } else {
            return li;
          }
        }),
      };
    default:
      return state;
  }
}
