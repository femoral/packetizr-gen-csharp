using System.Collections.Generic;

public class TestMessage {
    public const ushort Header = 1;

    public int Int32Field {get; set;}
    public float Float32Field {get; set;}
    public short Int16Field {get; set;}
    public sbyte Int8Field {get; set;}
    public string VarcharField {get; set;}
    public string CharField {get; set;}
    public uint Uint32Field {get; set;}
    public ushort Uint16Field {get; set;}
    public byte Uint8Field {get; set;}
    public CustomTypeDto CustomTypeField {get; set;}
    public List<StringsObjectDto> ArrayField {get; set;}
    public List<int> PrimitiveNumericArrayField {get; set;}
    public List<string> PrimitiveCharArrayField {get; set;}
    public List<string> PrimitiveVarcharArrayField {get; set;}
    public List<sbyte> PrimitiveSingleByteArrayField {get; set;}
}