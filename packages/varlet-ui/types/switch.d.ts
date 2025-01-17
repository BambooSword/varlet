import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'

export declare const switchProps: Record<keyof SwitchProps, any>

export interface SwitchProps extends BasicAttributes {
  modelValue?: any
  activeValue?: any
  inactiveValue?: any
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
  ripple?: boolean
  color?: string
  loadingColor?: string
  closeColor?: string
  size?: string | number
  rules?: Array<(value: any) => any>
  onClick?: ListenerProp<(event: Event) => void>
  onChange?: ListenerProp<(value: boolean) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: boolean) => void>
}

export class Switch extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SwitchProps>

  $props: SwitchProps
}

export class _SwitchComponent extends Switch {}
