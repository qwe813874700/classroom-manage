export interface Tree {
  id: number
  label?: string
  level?: number
  disabled?: boolean
  children?: Tree[],
  class?: string
  onlineStatus?: 0 | 1 | 2 // 0 是离线, 1 是未添加 2 是已添加进系统
}