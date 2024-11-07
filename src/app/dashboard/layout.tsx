import LeftSiderBar from "@/components/nav/app-sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  // 侧边栏导航Layout
  return (
    <LeftSiderBar>
      {children}
    </LeftSiderBar>
  )
}
