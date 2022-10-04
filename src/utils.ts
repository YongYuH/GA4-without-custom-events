type EmailEventSubCategory = 'email_back' | 'email_forget_password'
type EmailEventParameters = {
  event: 'login'
  sub_category: EmailEventSubCategory
  user_action: 'click'
}

type ForgetPasswordEventSubCategory = 'forget_password_back' | 'forget_password_ok'
type ForgetPasswordEventParameters = {
  event: 'login'
  sub_category: ForgetPasswordEventSubCategory
  user_action: 'click'
}

type LoginMethodClickEventSubCategory = 'popup'
type Method = 'email'
type LoginMethodClickEventParameters = {
  event: 'login'
  sub_category: LoginMethodClickEventSubCategory
  user_action: 'click'
  method: Method
}

type PopupControlEventSubCategory = 'popup_close'
type PopupControlEventParameters = {
  event: 'login'
  sub_category: PopupControlEventSubCategory
  user_action: 'click'
}

type PopupImpressionEventSubCategory = 'popup'
type TriggerPoint = 'pop up open button'
type PopupImpressionEventParameters = {
  event: 'login'
  sub_category: PopupImpressionEventSubCategory
  user_action: 'impression'
  trigger_point: TriggerPoint
}

type PushGA4EventArgs =
  | EmailEventParameters
  | ForgetPasswordEventParameters
  | LoginMethodClickEventParameters
  | PopupControlEventParameters
  | PopupImpressionEventParameters

export function pushGA4Event(args: PushGA4EventArgs): void {
  const dataLayer = (window as any).dataLayer
  if (!dataLayer) {
    return
  }

  dataLayer.push(args)
}
