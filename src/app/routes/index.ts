import { Router } from "express"
import { AuthRoutes } from "../module/auth/auth.routes"
import { UserRoutes } from "../module/user/user.routes"
import { OtpRoutes } from "../module/otp/otp.routes"
import { ContentRoutes } from "../module/content/content.routes"


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
    {
        path: "/content",
        route: ContentRoutes
    },

]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

