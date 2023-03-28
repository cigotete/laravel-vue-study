import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesListView from '../views/courses/CoursesList.vue'
import CourseDetailsView from '../views/courses/CourseDetails.vue'
import CourseCreateView from '../views/courses/CourseCreate.vue'
import CourseEditView from '../views/courses/CourseEdit.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '../views/auth/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/courses',
    name: 'coursesList',
    component: CoursesListView
  },
  {
    path: '/courses/:id(\\d+)',
    name: 'courseDetails',
    component: CourseDetailsView
  },
  {
    path: '/courses/:id(\\d+)/edit',
    name: 'courseEdit',
    component: CourseEditView
  },
  {
    path: '/courses/create',
    name: 'courseCreate',
    component: CourseCreateView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
