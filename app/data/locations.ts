export interface Location {
  id: number;
  name: string;
  question: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: "Location 1",
    question: "Is runoff from land to the north flowing onto the highway and into the drainage gullies?"
  },
  {
    id: 2,
    name: "Location 2",
    question: "Is runoff from land to the north and routed by the A384 ponding here and entering highway drainage gullies?"
  },
  {
    id: 3,
    name: "Location 3",
    question: "Watercourse crossing - is there potential for water entering manholes nearby?"
  },
  {
    id: 4,
    name: "Location 4",
    question: "Watercourse from north-west assumed to enter culvert beneath road and properties but could spill onto highway – any evidence for this? Is runoff from land to north and west being routed by highways and accumulating here."
  },
  {
    id: 5,
    name: "Location 5",
    question: "Combined Sewer crosses Bidwell Brook with manholes close to channel – is there any potential for water to enter these manholes?"
  },
  {
    id: 6,
    name: "Location 6",
    question: "Surface water is known to accumulate here. Does it originate from land/properties to the south? Does it flow onto the highway or enter drainage infrastructure in this area?"
  },
  {
    id: 7,
    name: "Location 7",
    question: "Does runoff routed by the highway network accumulate here? Is it entering the drainage gullies? Is there any obvious connection with the watercourse?"
  },
  {
    id: 8,
    name: "Location 8",
    question: "Possible for interaction between stream and nearby manholes?"
  },
  {
    id: 9,
    name: "Location 9",
    question: "Does runoff from the south flow on to the road and enter the drainage gullies?"
  },
  {
    id: 10,
    name: "Location 10",
    question: "Does runoff accumulate here and enter the drainage gullies?"
  },
  {
    id: 11,
    name: "Location 11",
    question: "Does runoff accumulate in this corner of the field before flowing north and onto the highway?"
  },
  {
    id: 12,
    name: "Location 12",
    question: "Is runoff being routed by farm track from the north?"
  },
  {
    id: 13,
    name: "Location 13",
    question: "Could runoff be entering manholes in this area?"
  },
  {
    id: 14,
    name: "Location 14",
    question: "Observed flooding of the road and nearby properties. Where does the runoff originate from - could it be coming from the track to north-east? Where does it drain?"
  },
  {
    id: 15,
    name: "Location 15",
    question: "Is runoff being intercepted and routed along Cott Lane?"
  },
  {
    id: 16,
    name: "Location 16",
    question: "Is runoff being intercepted and flowing down Cott Road toward the main junction?"
  },
  {
    id: 17,
    name: "Location 17",
    question: "Is the highway intercepting runoff from surrounding land and routing it towards Dartington Mill/Parsonage Farm"
  },
  {
    id: 18,
    name: "Location 18",
    question: "Is the A384 intercepting runoff from surrounding land and routing it towards Dartington School roundabout?"
  },
  {
    id: 19,
    name: "Location 19",
    question: "Is runoff or ponding in this area of Dartington Mill interacting with drainage infrastructure."
  },
  {
    id: 20,
    name: "Location 20",
    question: "Is runoff from the land to the south-west being intercepted and routed along the highway to this junction?"
  }
];

export const evidenceTypes = [
  "Erosion Patterns (bare soil, gullies, washouts)",
  "Sediment Deposits (silt or debris accumulated)",
  "Water Staining (discoloration on surfaces)",
  "Pooling Areas (spots where water tends to pool)",
  "Active Flow (during or after rainfall)",
  "Other"
];
