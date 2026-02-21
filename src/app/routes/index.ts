import { Router } from "express"
import { UserRoutes } from "../modules/user/user.routes"
import { OtpRoutes } from "../modules/otp/otp.routes"
import { AuthRoutes } from "../module/auth/auth.routes"


export const router = Router()

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/otp",
        route: OtpRoutes
    },
    {
        path: "/user",
        route: UserRoutes
    },

]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

