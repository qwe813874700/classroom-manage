type NavTypes = 'control' | 'device' | 'schedule' | 'setting' | 'update'

export default interface RootStateTypes {
  common: {
    currNav: NavTypes
  }
}
