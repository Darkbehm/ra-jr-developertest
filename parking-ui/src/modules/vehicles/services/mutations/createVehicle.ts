import { gql } from "@apollo/client";

export const CREATE_VEHICLE = gql`
  mutation createVehicle($input: CreateVehicleInput!){
    createVehicle(input: $input) {
      _id
      plate
      vehicleType
    }
  }
`;
