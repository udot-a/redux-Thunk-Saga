import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ["fuck", "php", "java"]

export const forbiddenWordsMiddleware = ({ dispatch }) => next => action => {
    if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w));

        if (found.length) {
            return dispatch(showAlert("Вы спамерю Go home!!!"));
        }
    }

    return next(action)
}