type NavTypes = 'control' | 'discovery' | 'schedule' | 'setting' | 'update'

export default interface RootStateTypes {
  common: {
    currNav: NavTypes
  }
}
