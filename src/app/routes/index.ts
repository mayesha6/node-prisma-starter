import { Router } from "express"
import { AuthRoutes } from "../module/auth/auth.routes"
import { UserRoutes } from "../module/user/user.routes"
import { OtpRoutes } from "../module/otp/otp.routes"


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

