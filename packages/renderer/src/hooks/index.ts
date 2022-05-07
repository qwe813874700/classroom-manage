import { Tree } from './interface'

export const removeTreeItemById = (treeList: Tree[], id: Number) => {
  console.log(treeList, id)
  treeList.splice(0)
}