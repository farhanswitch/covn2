export interface IData {
  id: number;
  jumlah_odp: number;
  jumlah_pdp: number;
  total_spesimen: number;
  total_spesimen_negatif: number;
}
exxport interface IHarianDataValue {
  value: number;
}
export interface IHarian {
  doc_count: number;
  jumlah_dirawat: IHarianDataValue;
  jumlah_dirawat_kum: IHarianDataValue;
  jumlah_meninggal: IHarianDataValue;
  jumlah_meninggal_kum: IHarianDataValue;
  jumlah_positif: IHarianDataValue;
  jumlah_positif_kum: IHarianDataValue;
  jumlah_sembuh: IHarianDataValue;
  jumlah_sembuh_kum: IHarianDataValue;
  key_as_string: string;
  key: number;
}
export interface IPenambahan extends ITotal {
	created: string;
 
  tanggal: string;
}
export interface ITotal {
  jumlah_dirawat: number;
  jumlah_positif: number;
  jumlah_sembuh: number;
  jumlah_meninggal: number;
}
export interface IUpdate {
  penambahan: IPenambahan;
  harian: IHarian[];
  total: ITotal;
}
export interface IDataCovid {
  data: IData;
  update: IUpdate;
}
export interface ICovid {
  dataCovid: IDataCovid;
}
