
export default [
  {
    path: '/Suivi',
    component: () => import('layouts/Suivi'),
    children: [
      { path: 'dashboard', component: () => import('pages/Dashboard') },
      { path: 'planning', component: () => import('pages/Planning') },
      { path: 'performance', component: () => import('pages/Performance') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/Home'),
    children: [
      { path: '', component: () => import('pages/Index') }
    ]
  },
  {
    path: '/hot',
    component: () => import('layouts/Hot'),
    children: [
      { path: '', component: () => import('pages/FilActu') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
