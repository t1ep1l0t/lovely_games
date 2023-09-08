import { createRouter, createWebHistory, RouterView } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import BrowseGamesView from "@/views/BrowseGamesView.vue";
import TournamentsView from "@/views/TournamentsView.vue";
import FaqView from "@/views/FaqView.vue";
import ProfileView from "@/views/ProfileView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import TermsUseView from "@/views/TermsUseView.vue";
import translation from "@/plugins/translation.config";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: translation.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'browse-games',
          name: 'browse_games',
          component: BrowseGamesView
        },
        {
          path: 'tournaments',
          name: 'tournaments',
          component: TournamentsView
        },
        {
          path: 'faq',
          name: 'faq',
          component: FaqView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
        {
          path: 'privacy-policy',
          name: 'privacy_policy',
          component: PrivacyPolicyView
        },
        {
          path: 'terms-use',
          name: 'terms_use',
          component: TermsUseView
        },
      ]
    }
  ],
  scrollBehavior () {
    return {
      top: 0
    }
  }
});

export default router;
