import MyText from '@/components/MyText'
import Page from '@/components/Page'
import React from 'react'
import { StyleSheet } from 'react-native'

const AccountSettings = () => {
  return (
    <Page>
      <MyText>Account Settings</MyText>
    </Page>
  )
}

export default AccountSettings

const styles = StyleSheet.create({})

/**
#### 1. **Profile**
* Display Name
* Email Address
* Authentication Type (Google, Apple, Email/Password)
* Sign Out
* Delete Account (with confirmation)

#### 2. **Subscription & Billing**
* Current Plan Name (Free / Pro)
* Features Included (list of perks for current plan)
* Billing Information

  * Payment Method (card on file or app store subscription)
  * Billing Address (if applicable)
* Payment History (past invoices, receipts)
* Renewal & Cancellation

  * Auto-renewal status toggle
  * Cancel Subscription button
* Trial Status (if user is on a free trial)

  * Trial expiration date
  * Benefits during trial


 */