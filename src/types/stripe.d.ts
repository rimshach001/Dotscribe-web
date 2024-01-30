export interface Stripe {
    customer: Customer
    customerSubscription: CustomerSubscription
  }
  
  export interface Customer {
    id: string
    object: string
    address: null
    balance: number
    created: number
    currency: string
    default_currency: string
    default_source: string
    delinquent: boolean
    description: null
    discount: null
    email: string
    invoice_prefix: string
    invoice_settings: InvoiceSettings
    livemode: boolean
    metadata: Metadata
    name: string
    next_invoice_sequence: number
    phone: null
    preferred_locales: null[]
    shipping: null
    tax_exempt: string
    test_clock: null
  }
  
  export interface InvoiceSettings {
    custom_fields: null
    default_payment_method: null
    footer: null
    rendering_options: null
  }
  
  export interface Metadata {
    organization_id: string
    organization_name: string
    organization_version: string
    user: string
  }

  
  export interface CustomerSubscription {
    id: string
    object: string
    application: null
    application_fee_percent: null
    billing_thresholds: null
    cancel_at: null
    cancel_at_period_end: boolean
    canceled_at: null
    cancellation_details: CancellationDetails
    collection_method: string
    created: number
    currency: string
    current_period_end: number
    current_period_start: number
    customer: string
    days_until_due: number
    default_payment_method: null
    default_source: null
    default_tax_rates: null[]
    description: null
    discount: null
    ended_at: null
    items: Items
    latest_invoice: string
    livemode: boolean
    metadata: Metadata
    next_pending_invoice_item_invoice: null
    on_behalf_of: null
    pause_collection: null
    payment_settings: PaymentSettings
    pending_invoice_item_interval: null
    pending_setup_intent: null
    pending_update: null
    plan: Plan2
    quantity: number
    schedule: null
    start_date: number
    status: string
    test_clock: null
    transfer_data: null
    trial_end: number
    trial_settings: TrialSettings
    trial_start: number
  }
  
  export interface AutomaticTax {
    enabled: boolean
  }
  
  export interface CancellationDetails {
    comment: null
    feedback: null
    reason: null
  }
  
  export interface Items {
    object: string
    data: Daum[]
    has_more: boolean
    total_count: number
    url: string
  }
  
  export interface Daum {
    id: string
    object: string
    billing_thresholds: null
    created: number
    metadata: Metadata
    plan: Plan
    price: Price
    quantity: number
    subscription: string
    tax_rates: null[]
  }
    
  export interface Plan {
    id: string
    object: string
    active: boolean
    aggregate_usage: null
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: Metadata
    nickname: null
    product: string
    tiers_mode: null
    transform_usage: null
    trial_period_days: null
    usage_type: string
  }
  
  export interface Price {
    id: string
    object: string
    active: boolean
    billing_scheme: string
    created: number
    currency: string
    custom_unit_amount: null
    livemode: boolean
    lookup_key: null
    metadata: Metadata
    nickname: null
    product: string
    recurring: Recurring
    tax_behavior: string
    tiers_mode: null
    transform_quantity: null
    type: string
    unit_amount: number
    unit_amount_decimal: string
  }
    
  export interface Recurring {
    aggregate_usage: null
    interval: string
    interval_count: number
    trial_period_days: null
    usage_type: string
  }
    
  export interface PaymentSettings {
    payment_method_options: null
    payment_method_types: null
    save_default_payment_method: string
  }
  
  export interface Plan2 {
    id: string
    object: string
    active: boolean
    aggregate_usage: null
    amount: number
    amount_decimal: string
    billing_scheme: string
    created: number
    currency: string
    interval: string
    interval_count: number
    livemode: boolean
    metadata: Metadata
    nickname: null
    product: string
    tiers_mode: null
    transform_usage: null
    trial_period_days: null
    usage_type: string
  }
    
  export interface TrialSettings {
    end_behavior: EndBehavior
  }
  
  export interface EndBehavior {
    missing_payment_method: string
  }

export const ACTIVE_SUBSCRIPTION_STATUS = 'active';
export const INACTIVE_SUBSCRIPTION_STATUS = 'inactive';
