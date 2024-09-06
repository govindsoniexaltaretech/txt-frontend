import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {

  // txt 
  const UserTxt = lazy(() => import('../modules/profile/txt/Users/Home'))
  const OverViewUsers = lazy(() => import('../modules/profile/txt/Users/Overview'))
  const Appointments = lazy(() => import('../modules/profile/txt/Appointments/Home'))
  const Services = lazy(() => import('../modules/profile/txt/Services/Home'))
  const Properties = lazy(() => import('../modules/profile/txt/Properties/Home'))
  const Subscriptions = lazy(() => import('../modules/profile/txt/Subscriptions/Home'))
  const Discount = lazy(() => import('../modules/profile/txt/Discount/Home'))

  // End User 
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/users' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        {/* TXT Page  */}
        <Route
          path='users/*'
          element={
            <SuspensedView>
              <UserTxt />
            </SuspensedView>
          }
        />
        <Route
          path='users-overview/*'
          element={
            <SuspensedView>
              <OverViewUsers />
            </SuspensedView>
          }
        />
        <Route
          path='appointment/*'
          element={
            <SuspensedView>
              <Appointments />
            </SuspensedView>
          }
        />
        <Route
          path='services/*'
          element={
            <SuspensedView>
              <Services />
            </SuspensedView>
          }
        />
        <Route
          path='subscription/*'
          element={
            <SuspensedView>
              <Subscriptions />
            </SuspensedView>
          }
        />
        <Route
          path='discount/*'
          element={
            <SuspensedView>
              <Discount />
            </SuspensedView>
          }
        />
        <Route
          path='properties/*'
          element={
            <SuspensedView>
              <Properties />
            </SuspensedView>
          }
        />
        {/* End TXT Page  */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
