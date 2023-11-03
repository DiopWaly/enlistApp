export enum StructureDB {
    USER_TABLE_QUERY = `create table if not exists user(
        id integer primary key,firstName varchar(32),lastName varchar(32), 
        tel varchar(10),pieceType varchar(5),
        pieceNum varchar(15))
    `,
    MERCHANT_TABLE_QUERY = `create table if not exists merchant(
        id integer primary key, merchantCode varchar(32),merchantTitle varchar(50), 
        tel varchar(10),commercialRegister varchar(20))
    `,
    USER = `user`,
    MERCHANT = `merchant`,
}
