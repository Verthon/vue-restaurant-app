/* eslint-disable @typescript-eslint/class-name-casing */
/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/bookings': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          created_at?: parameters['rowFilter.bookings.created_at'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          message?: parameters['rowFilter.bookings.message'];
          date?: parameters['rowFilter.bookings.date'];
          time?: parameters['rowFilter.bookings.time'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['bookings'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** bookings */
          bookings?: definitions['bookings'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          created_at?: parameters['rowFilter.bookings.created_at'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          message?: parameters['rowFilter.bookings.message'];
          date?: parameters['rowFilter.bookings.date'];
          time?: parameters['rowFilter.bookings.time'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          created_at?: parameters['rowFilter.bookings.created_at'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          message?: parameters['rowFilter.bookings.message'];
          date?: parameters['rowFilter.bookings.date'];
          time?: parameters['rowFilter.bookings.time'];
        };
        body: {
          /** bookings */
          bookings?: definitions['bookings'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/categories': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.categories.id'];
          created_at?: parameters['rowFilter.categories.created_at'];
          name?: parameters['rowFilter.categories.name'];
          description?: parameters['rowFilter.categories.description'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['categories'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** categories */
          categories?: definitions['categories'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.categories.id'];
          created_at?: parameters['rowFilter.categories.created_at'];
          name?: parameters['rowFilter.categories.name'];
          description?: parameters['rowFilter.categories.description'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.categories.id'];
          created_at?: parameters['rowFilter.categories.created_at'];
          name?: parameters['rowFilter.categories.name'];
          description?: parameters['rowFilter.categories.description'];
        };
        body: {
          /** categories */
          categories?: definitions['categories'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/products': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.products.id'];
          created_at?: parameters['rowFilter.products.created_at'];
          updated_at?: parameters['rowFilter.products.updated_at'];
          name?: parameters['rowFilter.products.name'];
          description?: parameters['rowFilter.products.description'];
          price?: parameters['rowFilter.products.price'];
          in_stock?: parameters['rowFilter.products.in_stock'];
          sale?: parameters['rowFilter.products.sale'];
          category_id?: parameters['rowFilter.products.category_id'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['products'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** products */
          products?: definitions['products'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.products.id'];
          created_at?: parameters['rowFilter.products.created_at'];
          updated_at?: parameters['rowFilter.products.updated_at'];
          name?: parameters['rowFilter.products.name'];
          description?: parameters['rowFilter.products.description'];
          price?: parameters['rowFilter.products.price'];
          in_stock?: parameters['rowFilter.products.in_stock'];
          sale?: parameters['rowFilter.products.sale'];
          category_id?: parameters['rowFilter.products.category_id'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.products.id'];
          created_at?: parameters['rowFilter.products.created_at'];
          updated_at?: parameters['rowFilter.products.updated_at'];
          name?: parameters['rowFilter.products.name'];
          description?: parameters['rowFilter.products.description'];
          price?: parameters['rowFilter.products.price'];
          in_stock?: parameters['rowFilter.products.in_stock'];
          sale?: parameters['rowFilter.products.sale'];
          category_id?: parameters['rowFilter.products.category_id'];
        };
        body: {
          /** products */
          products?: definitions['products'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/testimonials': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.testimonials.id'];
          created_at?: parameters['rowFilter.testimonials.created_at'];
          author?: parameters['rowFilter.testimonials.author'];
          description?: parameters['rowFilter.testimonials.description'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['testimonials'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** testimonials */
          testimonials?: definitions['testimonials'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.testimonials.id'];
          created_at?: parameters['rowFilter.testimonials.created_at'];
          author?: parameters['rowFilter.testimonials.author'];
          description?: parameters['rowFilter.testimonials.description'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.testimonials.id'];
          created_at?: parameters['rowFilter.testimonials.created_at'];
          author?: parameters['rowFilter.testimonials.author'];
          description?: parameters['rowFilter.testimonials.description'];
        };
        body: {
          /** testimonials */
          testimonials?: definitions['testimonials'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  /** Simple booking system for restaurant */
  bookings: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at: string;
    name: string;
    email: string;
    message?: string;
    date: string;
    time: string;
  };
  /** categories for the menu */
  categories: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at: string;
    name: string;
    description: string;
  };
  /** Products for menu and carts etc */
  products: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at: string;
    updated_at?: string;
    name: string;
    description: string;
    price: number;
    in_stock: boolean;
    sale: boolean;
    /**
     * Note:
     * This is a Foreign Key to `categories.id`.<fk table='categories' column='id'/>
     */
    category_id: number;
  };
  /** Clients testimonials */
  testimonials: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    created_at: string;
    author: string;
    description: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: 'params=single-object';
  /** Preference */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /** Preference */
  preferCount: 'count=none';
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** bookings */
  'body.bookings': definitions['bookings'];
  'rowFilter.bookings.id': string;
  'rowFilter.bookings.created_at': string;
  'rowFilter.bookings.name': string;
  'rowFilter.bookings.email': string;
  'rowFilter.bookings.message': string;
  'rowFilter.bookings.date': string;
  'rowFilter.bookings.time': string;
  /** categories */
  'body.categories': definitions['categories'];
  'rowFilter.categories.id': string;
  'rowFilter.categories.created_at': string;
  'rowFilter.categories.name': string;
  'rowFilter.categories.description': string;
  /** products */
  'body.products': definitions['products'];
  'rowFilter.products.id': string;
  'rowFilter.products.created_at': string;
  'rowFilter.products.updated_at': string;
  'rowFilter.products.name': string;
  'rowFilter.products.description': string;
  'rowFilter.products.price': string;
  'rowFilter.products.in_stock': string;
  'rowFilter.products.sale': string;
  'rowFilter.products.category_id': string;
  /** testimonials */
  'body.testimonials': definitions['testimonials'];
  'rowFilter.testimonials.id': string;
  'rowFilter.testimonials.created_at': string;
  'rowFilter.testimonials.author': string;
  'rowFilter.testimonials.description': string;
}
