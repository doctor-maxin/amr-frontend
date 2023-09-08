import AppConfig from "../app.config";

export type DirectusUser = {
    auth_data?: unknown | null;
    description?: string | null;
    email?: string | null;
    email_notifications?: boolean | null;
    external_identifier?: string | null;
    first_name?: string | null;
    id: string;
    language?: string | null;
    last_access?: string | null;
    last_name?: string | null;
    last_page?: string | null;
    location?: string | null;
    password?: string | null;
    provider: string;
    status: string;
    tags?: unknown | null;
    tfa_secret?: string | null;
    theme?: string | null;
    title?: string | null;
    token?: string | null;
    [key: string]: any;
} | null;


export type DirectusFolders = {
    id: string;
    name: string;
    parent?: string | DirectusFolders | null;
};

export type DirectusFile = {
    charset?: string | null;
    description?: string | null;
    duration?: number | null;
    embed?: string | null;
    filename_disk?: string | null;
    filename_download: string;
    filesize?: number | null;
    folder?: string | DirectusFolders | null;
    height?: number | null;
    id: string;
    location?: string | null;
    metadata?: unknown | null;
    modified_by?: string | DirectusUser | null;
    modified_on: string;
    storage: string;
    tags?: unknown | null;
    title?: string | null;
    type?: string | null;
    uploaded_by?: string | DirectusUser | null;
    uploaded_on: string;
    width?: number | null;
    [key: string]: any;
} | null;

export type IBreadCrumb = {
    title: string;
    path: string;
    disabled?: boolean;
}

export type ILink = {
    title: string;
    path: string;
}

export type ICategory = {
    id: string;
    name: string;
    childrens: string[];
    handle: string;
    parentId?: string
    image?: {
        id?: string;
    }
}

export type ISettings = {
    adressShowRoom: string;
    Email: string;
    phone: string;
    privacyPolicyLink: string;
    contractOfferLink: string;
    telegramLink?: string;
    vkLink?: string;
}

export type ICustomerPage = {
    title: string;
    handle: string;
    id: string;
}
export type ICustomerPages = {
    title: string;
    navBars: ICustomerPage[]
}

export type IParagraphBlock = {
    type: 'paragraph';
    id: string;
    data: {
        text: string;
    }
    tunes: {
        alignment: {
            alignment: string;
        }
    };
}

export type IHeaderBlock = {
    id: string;
    type: "header";
    tunes: {
        alignment: {
            alignment: string;
        }
    };
    data: {
        text: string;
        level: number;

    };
}

export type IListItem = {
    content: string;
    items: IListItem[];
}

export type IListBlock = {
    id: string;
    type: "nestedlist";
    data: {
        style: 'unordered' | 'ordered'
        items: IListItem[];
    }
}

export type ITableBlock = {
    id: string;
    type: 'table';
    data: {
        withHeadings: boolean;
        content: string[][];
    }
}

export type IAttachesBlock = {
    id: string;
    type: 'attaches';
    data: {
        file: DirectusFile;
    }
}

export type IQuoteBlock = {
    id: string;
    type: 'quote';
    data: {
        text: string;
        caption: string;
        alignment: string;
    };
    tunes: {
        alignment: {
            alignment: string;
        }
    }
}

export type IImageBlock = {
    id: string;
    type: 'image';
    data: {
        file: {
            width: number;
            height: number;
            size: string;
            name: string;
            title: string;
            extension: string;
            fileId: string;
            fileURL: string;
            url: string;
        }
        caption: string;
        withBorder: boolean;
        stretched: boolean;
        withBackground: boolean;
    }
}

export type IBlock = IHeaderBlock | IParagraphBlock | IListBlock | ITableBlock | IAttachesBlock | IQuoteBlock | IImageBlock;

export type ICustomerPageFull = ICustomerPage & {
    blocks: {
        time: string;
        blocks: IBlock[];
        version: string;
    }
}

export  interface AppConfigInput extends AppConfig {
    noImageId: string;
    messages: {
        productAdded: string;
    }
}