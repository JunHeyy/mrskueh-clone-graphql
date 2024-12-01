import { gql } from '@apollo/client';

export const GET_CONFIG = gql`
  query GetConfig {
    config {
      country
      currency
      features
      brandAvailableFulfilmentTypes
      scripts
      apps
      uiDefinitions
      accountId
      pointProgram
    }
    referral {
      label
      description
      shortDescription
      sidebarLabel
    }
    brands
    currentStorefront {
      id
      label
      identifier
      logoUrl
      config {
        colors {
          logo_url
          body_text
          body_border
          footer_link
          footer_text
          header_text
          body_subtext
          body_background
          header_background
        }
        diner_base_url
        diner_menu_link
        timeslot_config {
          duration
          interval
        }
        number_of_upcoming_dates
        upcoming_dates_lead_time
      }
    }
  }
`;