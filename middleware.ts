import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:[
        "/",  // Home page is always accessible.
        "/events/:id", // Events with a dynamic parameter
        "/api/webhook/clerk", //Webhook routes for Clerk
        "/api/webhook/stripe", // Webhook routes for Stripe
        "/api/uploadthing"// An upload route
    ],
    ignoredRoutes:[
        "/api/webhook/clerk",
        "/api/webhook/stripe",
        "/api/uploadthing"
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 