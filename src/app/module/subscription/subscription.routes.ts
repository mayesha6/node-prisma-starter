import { Router } from "express";
import { UserRole } from "@prisma/client";
import { SubscriptionController } from "./subscription.controller";
import { SubscriptionValidation } from "./subscription.validation";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/create-subscription",
  checkAuth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(SubscriptionValidation.SubscriptionValidationSchema),
  SubscriptionController.createSubscription
);

router.get(
  "/my-subscription",
  checkAuth(),
  SubscriptionController.getMySubscription
);

router.get("/", checkAuth(), SubscriptionController.getAllSubscription);

router.get(
  "/:subscriptionId",
  checkAuth(),
  SubscriptionController.getSingleSubscription
);

router.put(
  "/:subscriptionId",
  checkAuth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  SubscriptionController.updateSubscription
);

router.delete(
  "/:subscriptionId",
  checkAuth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  SubscriptionController.deleteSubscription
);


export const SubscriptionRoutes = router;
