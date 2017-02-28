/**
 * Created by surender.s on 28/02/17.
 */
export default function (state = {}, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
        break;
    }
    return state;
}