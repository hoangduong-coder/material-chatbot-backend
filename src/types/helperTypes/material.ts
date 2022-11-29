export interface MaterialProperties {
  name: string;
  internationalStandards: string;
  properties?: unknown;
}

export interface Material {
  _id: string;
  objectName: string;
  dimensions: string;
  unit: string;
  internationalStandards: string;
  rawMaterial: MaterialProperties;
  remarks: string;
  mass: number;
  density: {
    temperature: number; //in degree Celsius
    value: number; //in g/cm^3
  };
}
