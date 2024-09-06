import { SidebarMenuItem } from './SidebarMenuItem'

const SidebarMenuMain = () => {

  return (
    <>
      <SidebarMenuItem
        to='/users'
        title='Users'
        hasBullet={false}
        icon='user'
        fontIcon='bi-user'
      />
      <SidebarMenuItem
        to='/appointment'
        title='Appointments'
        hasBullet={false}
        fontIcon='bi-calendar'
        icon='calendar'
      />
      <SidebarMenuItem
        to='/services'
        title='Services'
        hasBullet={false}
        fontIcon='bi-house'
        icon='home'
      />
      <SidebarMenuItem
        to='/subscription'
        title='Subscription'
        hasBullet={false}
        fontIcon='bi-bar-chart'
        icon='chart'
      />
      <SidebarMenuItem
        to='/discount'
        title='Discount'
        hasBullet={false}
        fontIcon='bi-tags'
        icon='tag'
      />
      <SidebarMenuItem
        to='/properties'
        title='Properties'
        hasBullet={false}
         fontIcon='bi-bar-chart'
        icon='chart'
      />  
      <SidebarMenuItem
        to='/master-data'
        title='Master Data'
        hasBullet={false}
        fontIcon='bi-bar-chart'
        icon='chart'
      /> 
      <SidebarMenuItem
        to='/system-users'
        title='System Users'
        hasBullet={false}
        fontIcon='bi-bar-chart'
        icon='chart'
      /> 
    </>
  )
}

export { SidebarMenuMain }

