/**
 * Created by surender.s on 28/02/17.
 */
//This is action creator which is handled by appropriate
    //reducer which changes data in store
export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
};