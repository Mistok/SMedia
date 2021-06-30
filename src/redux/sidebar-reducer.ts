//friends reducer

let initialState = {
    friendsData: [
        {id: 1, name: 'Dimych',  img: 'ava_1.jpeg'},
        {id: 2, name: 'Andrev',  img: 'ava_2.jpeg'},
        {id: 3, name: 'Sveta',   img: 'ava_3.jpeg'},
        {id: 4, name: 'Sasha',   img: 'ava_4.jpeg'},
        {id: 5, name: 'Victor',  img: 'ava_5.jpeg'},
        {id: 6, name: 'Valera',  img: 'ava_6.jpeg'}
    ]
};

type InitialStateType = typeof initialState

export const sidebarReducer = (state = initialState, action: any) => {
    return state;
};


export default sidebarReducer;