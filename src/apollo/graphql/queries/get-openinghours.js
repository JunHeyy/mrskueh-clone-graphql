import { gql } from '@apollo/client';

export const GET_OPENING_HOURS = gql`
  query GetOpeningHours {
    getTimeslots {
      closingTimeForLunch
      closingTimeForDay
      outletOperatingHours
      servingDate
      upcomingDates {
        date
        name
        messageCode
        message
      }
      timeslots {
        id
        startTime
        endTime
        rangeLabel
        type
        label
        leadTime
        isAvailable
        fulfilmentTypes
      }
    }
  }
`;