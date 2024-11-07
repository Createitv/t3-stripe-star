import { TopNavigation } from "@/components/nav/top-menu"


export default function Layout({ children }: { children: React.ReactNode }) {
  // 侧边栏导航Layout
  return (
    <TopNavigation>
      {children}
    </TopNavigation>
  )
}
