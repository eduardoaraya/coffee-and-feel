import BooleanField from "../components/FormFields/Boolean";
import CheckboxField from "../components/FormFields/Checkbox";
import CheckboxGroupField from "../components/FormFields/CheckboxGroup";
import CurrencyField from "../components/FormFields/Currency";
import DateField from "../components/FormFields/Date";
import ImageField from "../components/FormFields/Image";
import ListField from "../components/FormFields/List";
import MarkdownField from "../components/FormFields/Markdown";
import PhoneFields from "../components/FormFields/Phone";
import RadioField from "../components/FormFields/Radio";
import SelectField from "../components/FormFields/Select";
import StringField from "../components/FormFields/String";
import TextField from "../components/FormFields/Text";
import TimeField from "../components/FormFields/Time";
import TupleListField from "../components/FormFields/TupleList";

const ContentGeneratorFieldVariations = {
  string: "string",
  text: "text",
  currency: "currency",
  tupleList: "tupleList",
  list: "list",
  image: "image",
  checkbox: "checkbox",
  checkboxGroup: "checkboxGroup",
  markdown: "markdown",
  boolean: "boolean",
  radio: "radio",
  select: "select",
  time: "time",
  phone: "phone",
  date: "date",
} as const;

type GeneratorFieldsVariants =
  typeof ContentGeneratorFieldVariations[keyof typeof ContentGeneratorFieldVariations];

type GeneratorFieldsMap = {
  [Key in GeneratorFieldsVariants]: React.FC<any>;
};

interface GeneratorItem {
  icon: React.FC<unknown>;
  path: string;
  id: string;
  groups: Array<{ id: string; label: string }>;
}

export const DYNAMIC_FIELD_MAP: GeneratorFieldsMap = {
  boolean: BooleanField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  currency: CurrencyField,
  date: DateField,
  image: ImageField,
  list: ListField,
  markdown: MarkdownField,
  phone: PhoneFields,
  radio: RadioField,
  select: SelectField,
  string: StringField,
  text: TextField,
  time: TimeField,
  tupleList: TupleListField,
};
