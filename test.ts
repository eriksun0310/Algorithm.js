type ConnectorBoltBasic = {
  id: number;
  type: string;
  flang: "Front" | "Top" | "Bottom" | "Behind";
  x: number;
};
type a = {
  a: string;
  id: number;
  type: string;
};

type Connector = ConnectorBoltBasic | a;

type ConnectorList = Array<Connector>;

let con: ConnectorBoltBasic[];

let c: Connector[] = con;

for (let index = 0; index < c.length; index++) {
  let aa: ConnectorBoltBasic = {
    id: c[index].id,
    type: "bolt-basic",
    flang: (c[index] as ConnectorBoltBasic).flang,
    x: (c[index] as ConnectorBoltBasic).x,
  };
}
