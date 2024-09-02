// import {useIntl} from 'react-intl'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'

const SidebarMenuMain = () => {
  // const intl = useIntl()

  return (
    <>
      <SidebarMenuItemWithSub
        to='/users'
        title='Users'
        fontIcon='bi-user'
        icon='user'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>


      <SidebarMenuItemWithSub
        to='/appointment'
        title='Appointments'
        fontIcon='bi-calendar'
        icon='calendar'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/services'
        title='Services'
        fontIcon='bi-house'
        icon='home'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/subscription'
        title='Subscription'
        fontIcon='bi-bar-chart'
        icon='chart'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/discount'
        title='Discount'
        fontIcon='bi-tags'
        icon='tag'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to='/properties'
        title='Properties'
        fontIcon='bi-map'
        icon='map-pin'
      >
        {/* Add your sub-menu items here */}
      </SidebarMenuItemWithSub>
    </>
  )
}

export { SidebarMenuMain }
