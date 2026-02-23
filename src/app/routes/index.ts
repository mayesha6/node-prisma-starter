import { Router } from "express"
import { AuthRoutes } from "../module/auth/auth.routes"
import { UserRoutes } from "../module/user/user.routes"
import { OtpRoutes } from "../module/otp/otp.routes"
import { ContentRoutes } from "../module/content/content.routes"
import { FAQRoutes } from "../module/faq/faq.routes"


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
    {
        path: "/faq",
        route: FAQRoutes
    },

]

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

