import { gql } from '@apollo/client';
export const GET_MENU = gql`
  query GetMenu {

      id
      label
      startDate
      endDate
      isAvailable
      translation {
        title {
          default
        }
        description
      }
      sections {
        id
        label
        description
        displayOrder
        isAvailable
        humanizedAvailability
        disabledReason
        disabled
        translation {
          title {
            default
          }
          description
        }
        items {
          id
          label
          description
          displayOrder
          isHighlight
          unitPriceFractional
          currency
          isConfigurable
          horizontalImageUrl
          idBreadcrumb
          disabled
          disabledReason
          promotionalLabelText
          promotionalLabelFontColor
          promotionalLabelBgColor
          sugarLevel
          nutriGrade
          translation {
            title {
              default
            }
            description {
              default
            }
          }
          humanizedAvailability
          humanizedLeadTime
          isAvailable
          isLeadTimeBreached
          itemStock {
            id
            quantityLeft {
              entire
            }
          }
          modifierGroups
        }
      }
    }

`;