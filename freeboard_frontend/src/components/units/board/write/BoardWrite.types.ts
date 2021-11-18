import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: String;
  };
}

export interface IBoardWriteUIProps {
  postcode: MouseEventHandler<HTMLButtonElement> | undefined;
  onCompleteAddressSearch: ((address: Address) => void) | undefined;
  myWriterError: string;
  myPasswordError: string;
  myTitleError: string;
  myContentsError: string;
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeMyYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickAddressSearch: () => void;
  oncompleteAddressSearch: (data: any) => void;
  isActive: boolean;
  isEdit?: boolean;
  isOpen: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  zipcode: string;
  address: string;
  addressDetail: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
