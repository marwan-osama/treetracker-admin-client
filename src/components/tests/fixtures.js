import FilterModel from '../../models/Filter';
import FilterGrower from '../../models/FilterGrower';

const CAPTURE = {
  reference_id: 100,
  id: '11942400-6617-4c6c-bf5e',
  grower_account_id: 10,
  wallet: 'grower1@some.place',
  device_identifier: '1-abcdef123456',
  status: 'active',
  speciesId: 0,
  token_id: 't-1234',
  created_at: '2020-07-29T21:46:03.522Z',
  morphology: 'seedling',
  age: 'new_tree',
  captureApprovalTag: 'simple_leaf',
  treeTags: [
    {
      id: 1,
      captureId: 0,
      tagId: 3,
    },
  ],
};

const CAPTURES = {
  total: 4,
  page: 0,
  limit: 25,
  offset: 0,
  captures: [
    {
      reference_id: 100,
      id: '11942400-6617-4c6c-bf5e',
      grower_account_id: 10,
      wallet: 'grower1@some.place',
      device_identifier: '1-abcdef123456',
      status: 'active',
      speciesId: 0,
      token_id: 't-1234',
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 110,
      id: 'bbf0e582-ec06-45c4-9a71-7bab679e945b',
      grower_account_id: 11,
      wallet: 'grower2@some.place',
      device_identifier: '2-abcdef123456',
      status: 'active',
      speciesId: 0,
      token_id: 't-2341',
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 120,
      id: '5a91c4fd-b57b-47fe-ac99-5d95eccad91d',
      grower_account_id: 12,
      wallet: 'grower3@some.place',
      device_identifier: '3-abcdef123456',
      status: 'active',
      speciesId: 1,
      token_id: 't-3412',
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 101,
      id: '6760d7bc-48b7-4105-8437-ed3b48473d9a',
      grower_account_id: 10,
      wallet: 'grower3@some.place',
      device_identifier: '3-abcdef123456',
      status: 'active',
      speciesId: 30,
      token_id: 't-4123',
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
  ],
};

const RAW_CAPTURE = {
  reference_id: 100,
  id: '11942400-6617-4c6c-bf5e',
  grower_account_id: 10,
  wallet: 'grower1@some.place',
  device_identifier: '1-abcdef123456',
  status: 'unprocessed',
  speciesId: 0,
  created_at: '2020-07-29T21:46:03.522Z',
  morphology: 'seedling',
  age: 'new_tree',
  captureApprovalTag: 'simple_leaf',
};

const RAW_CAPTURES = {
  query: { count: 4, page: 0, limit: 25, offset: 0 },
  raw_captures: [
    {
      reference_id: 100,
      id: '11942400-6617-4c6c-bf5e',
      grower_account_id: 10,
      wallet: 'grower1@some.place',
      device_identifier: '1-abcdef123456',
      status: 'unprocessed',
      speciesId: 0,
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 110,
      id: 'bbf0e582-ec06-45c4-9a71-7bab679e945b',
      grower_account_id: 11,
      wallet: 'grower2@some.place',
      device_identifier: '2-abcdef123456',
      status: 'unprocessed',
      speciesId: 0,
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      // age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 120,
      id: '5a91c4fd-b57b-47fe-ac99-5d95eccad91d',
      grower_account_id: 12,
      wallet: 'grower3@some.place',
      device_identifier: '3-abcdef123456',
      status: 'unprocessed',
      speciesId: 1,
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
    {
      reference_id: 101,
      id: '6760d7bc-48b7-4105-8437-ed3b48473d9a',
      grower_account_id: 10,
      wallet: 'grower3@some.place',
      device_identifier: '3-abcdef123456',
      status: 'unprocessed',
      speciesId: 30,
      created_at: '2020-07-29T21:46:03.522Z',
      morphology: 'seedling',
      age: 'new_tree',
      captureApprovalTag: 'simple_leaf',
    },
  ],
};

const CAPTURE_TAGS = [
  {
    id: 1,
    capture_id: 100,
    tag_id: 3,
  },
  {
    id: 1,
    capture_id: 110,
    tag_id: 3,
  },
  {
    id: 1,
    capture_id: 120,
    tag_id: 3,
  },
  {
    id: 1,
    capture_id: 101,
    tag_id: 3,
  },
];

const GROWER = {
  id: 1,
  firstName: 'testFirstName',
  lastName: 'testLastName',
  email: 'test@gmail.com',
  organization: null,
  phone: '123-456-7890',
  imageUrl:
    'https://treetracker-production-images.s3.eu-central-1.amazonaws.com/2020.11.17.12.45.48_8.42419553_-13.16719857_11d157fb-1bb0-4497-a7d7-7c16ce658158_IMG_20201117_104118_1916638584657622896.jpg',
  personId: null,
  organizationId: 11,
};

const GROWERS = [
  {
    id: 1,
    firstName: 'testFirstName',
    lastName: 'testLastName',
    email: 'test@gmail.com',
    organization: null,
    phone: '123-456-7890',
    imageUrl:
      'https://treetracker-production-images.s3.eu-central-1.amazonaws.com/2020.11.17.12.45.48_8.42419553_-13.16719857_11d157fb-1bb0-4497-a7d7-7c16ce658158_IMG_20201117_104118_1916638584657622896.jpg',
    personId: null,
    organizationId: 1,
  },
  {
    id: 2,
    firstName: 'testFirstName2',
    lastName: 'testLastName2',
    email: 'test2@gmail.com',
    organization: null,
    phone: '123-456-7890',
    imageUrl: '',
    personId: null,
    organizationId: 11,
  },
  {
    id: 3,
    firstName: 'testFirstName3',
    lastName: 'testLastName3',
    email: 'test3@gmail.com',
    organization: null,
    phone: '123-456-7890',
    imageUrl: '',
    personId: null,
    organizationId: 1,
  },
];

const ORGS = [
  {
    id: 0,
    stakeholder_uuid: '00000000-0000-0000-0000-000000000000',
    name: 'Dummy Org',
  },
  {
    id: 1,
    stakeholder_uuid: '11111111-1111-1111-1111-111111111111',
    name: 'Another Org',
  },
];

const TAG = {
  id: 3,
  name: 'test',
  isPublic: true,
  status: 'active',
  owner_id: null,
};

const TAGS = [
  {
    id: 0,
    name: 'tag_a',
    isPublic: true,
    status: 'active',
    owner_id: null,
  },
  {
    id: 1,
    name: 'tag_b',
    isPublic: true,
    status: 'active',
    owner_id: null,
  },
  {
    id: 3,
    name: 'tag_c',
    isPublic: true,
    status: 'active',
    owner_id: null,
  },
];

// const TAGS = [
//   {
//     id: 0,
//     name: 'tag_a',
//     public: true,
//     active: true,
//   },
//   {
//     id: 1,
//     name: 'tag_b',
//     public: true,
//     active: true,
//   },
//   {
//     id: 3,
//     name: 'tag_c',
//     public: true,
//     active: true,
//   },
// ];

const SPECIES = [
  {
    id: 0,
    name: 'Pine',
  },
  {
    id: 1,
    name: 'apple',
  },
  {
    id: 30,
    name: 'fig',
  },
];

const REGIONS = [
  {
    id: '22222222-2222-2222-2222-222222222222',
    owner_id: '00000000-0000-0000-0000-000000000000',
    collection_id: '44444444-4444-4444-4444-444444444444',
    name: 'Regent-Lumley',
    shape: 'region/22222222-2222-2222-2222-222222222222/shape',
    properties: {
      Id: 577,
      gid: 4,
      City: null,
      Name: 'Regent-Lumley',
      Label: null,
      Name1: 'C13',
      Notes: null,
      Area_m2: 14170348.8219,
      Area_km2: 14.1703488219,
      Hectares: 1417.24782491,
      gridcode: 506,
      Area_m2_1: 262201550,
      Name_Code: 13,
      FID_catchm: 3,
      FID_sle_st: 0,
    },
    show_on_org_map: false,
    calculate_statistics: true,
    created_at: '2022-03-19T01:43:28.496Z',
    updated_at: '2022-04-03T20:34:32.820Z',
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    owner_id: '00000000-0000-0000-0000-000000000000',
    collection_id: '44444444-4444-4444-4444-444444444444',
    name: 'Aberdeen',
    shape: 'region/33333333-3333-3333-3333-333333333333/shape',
    properties: {
      Id: 240,
      gid: 3,
      City: null,
      Name: 'Aberdeen',
      Label: null,
      Name1: 'C1',
      Notes: null,
      Area_m2: 9657876.2148,
      Area_km2: 9.6578762148,
      Hectares: 967.464585175,
      gridcode: 227,
      Area_m2_1: 262201550,
      Name_Code: 1,
      FID_catchm: 2,
      FID_sle_st: 0,
    },
    show_on_org_map: true,
    calculate_statistics: true,
    created_at: '2022-03-19T01:43:28.461Z',
    updated_at: '2022-04-03T20:08:49.959Z',
  },
];

const REGION_COLLECTIONS = [
  {
    id: '44444444-4444-4444-4444-444444444444',
    owner_id: '00000000-0000-0000-0000-000000000000',
    name: 'jivdib',
    created_at: '2022-03-19T01:43:28.347Z',
    updated_at: '2022-04-03T20:34:06.286Z',
  },
  {
    id: '55555555-5555-5555-5555-555555555555',
    owner_id: '11111111-1111-1111-1111-111111111111',
    name: 'agdafd',
    created_at: '2022-03-19T01:43:28.347Z',
    updated_at: '2022-04-03T20:34:17.857Z',
  },
];

const capturesValues = {
  captures: CAPTURES.captures,
  captureCount: CAPTURES.total,
  selected: [],
  capture: {},
  numSelected: 0,
  page: 0,
  rowsPerPage: 25,
  order: 'asc',
  orderBy: 'id',
  allIds: [],
  byId: {},
  filter: new FilterModel(),
  queryCapturesApi: () => {},
  getCaptureCount: () => {},
  getCapturesAsync: () => {},
  getCaptureAsync: () => {},
};
const growerValues = {
  growers: GROWERS,
  pageSize: 24,
  count: null,
  currentPage: 0,
  filter: new FilterGrower(),
  isLoading: false,
  totalGrowerCount: null,
  load: () => {},
  getCount: () => {},
  changePageSize: () => {},
  changeCurrentPage: () => {},
  getGrower: () => {},
  updateGrower: () => {},
  updateGrowers: () => {},
  updateFilter: () => {},
  getTotalGrowerCount: () => {},
};
const verifyValues = {
  captureImages: RAW_CAPTURES.raw_captures,
  captureImagesSelected: [],
  captureImageAnchor: undefined,
  captureImagesUndo: [],
  isLoading: false,
  isApproveAllProcessing: false,
  approveAllComplete: 0,
  pageSize: 12,
  currentPage: 0,
  filter: new FilterModel({
    approved: false,
    active: true,
  }),
  invalidateCaptureCount: true,
  captureCount: null,
  approve: () => {},
  // undoCaptureImage: () => {},
  loadCaptureImages: () => {},
  approveAll: () => {},
  undoAll: () => {},
  updateFilter: () => {},
  getCaptureCount: () => {},
  clickCapture: () => {},
  setPageSize: () => {},
  setCurrentPage: () => {},
};
const tagsValues = {
  tagList: TAGS,
  tagInput: [],
  loadTags: () => {},
  createTags: () => {},
  setTagInput: () => {},
};
const speciesValues = {
  speciesList: SPECIES,
  speciesInput: '',
  speciesDesc: '',
  setSpeciesInput: () => {},
  loadSpeciesList: () => {},
  onChange: () => {},
  isNewSpecies: () => {},
  createSpecies: () => {},
  getSpeciesId: () => {},
  editSpecies: () => {},
  deleteSpecies: () => {},
  combineSpecies: () => {},
};

module.exports = {
  CAPTURE,
  CAPTURES,
  CAPTURE_TAGS,
  GROWER,
  GROWERS,
  ORGS,
  TAG,
  TAGS,
  SPECIES,
  RAW_CAPTURE,
  RAW_CAPTURES,
  REGIONS,
  REGION_COLLECTIONS,
  capturesValues,
  growerValues,
  verifyValues,
  tagsValues,
  speciesValues,
};
