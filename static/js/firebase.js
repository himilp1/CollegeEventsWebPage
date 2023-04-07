import {initializedApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const app = initializedApp("../firebase_sdk.json")

export const auth = getAuth(app)


