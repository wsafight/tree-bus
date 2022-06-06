import mitt from './mitt'
import TreeBus from './TreeBus'

const getTreeBus = () => {
  return new TreeBus()
}

export {
  mitt,
  TreeBus,
  getTreeBus
}

export default getTreeBus