export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accounts: {
        Row: {
          alias: string | null
          bank: string | null
          created_at: string
          id: number
          name: string | null
          number: string | null
          phone: string | null
          type: string | null
          user: string | null
        }
        Insert: {
          alias?: string | null
          bank?: string | null
          created_at?: string
          id?: number
          name?: string | null
          number?: string | null
          phone?: string | null
          type?: string | null
          user?: string | null
        }
        Update: {
          alias?: string | null
          bank?: string | null
          created_at?: string
          id?: number
          name?: string | null
          number?: string | null
          phone?: string | null
          type?: string | null
          user?: string | null
        }
        Relationships: []
      }
      agent_request: {
        Row: {
          age: string | null
          city: string | null
          convicted: boolean
          country: string | null
          created_at: string
          current_address_1: string | null
          current_address_2: string | null
          email: string | null
          employer: string | null
          employer_country: string | null
          employment_status: string | null
          evicted: boolean
          features: string[] | null
          first_name: string | null
          has_pets: boolean
          has_vehicles: boolean
          id: number
          is_paid: boolean
          job_title: string | null
          last_name: string | null
          location: Json[] | null
          marital_status: string | null
          match_modified_at: string | null
          matched_properties: number[] | null
          max_bathrooms: string | null
          max_beds: string | null
          max_lease: string | null
          max_price: string | null
          min_bathrooms: string | null
          min_beds: string | null
          min_lease: string | null
          min_price: string | null
          monthly_income: string | null
          monthly_income_currency: string | null
          move_in_date: string | null
          moving_reason: string | null
          payment_ref: number | null
          phone: string | null
          preferred_contact_method: string | null
          preferred_payment_option: string | null
          property_type: string[] | null
          renter_id: string
          search_title: string | null
          tenants: string | null
          title: string | null
        }
        Insert: {
          age?: string | null
          city?: string | null
          convicted?: boolean
          country?: string | null
          created_at?: string
          current_address_1?: string | null
          current_address_2?: string | null
          email?: string | null
          employer?: string | null
          employer_country?: string | null
          employment_status?: string | null
          evicted?: boolean
          features?: string[] | null
          first_name?: string | null
          has_pets: boolean
          has_vehicles?: boolean
          id?: number
          is_paid?: boolean
          job_title?: string | null
          last_name?: string | null
          location?: Json[] | null
          marital_status?: string | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: string | null
          max_beds?: string | null
          max_lease?: string | null
          max_price?: string | null
          min_bathrooms?: string | null
          min_beds?: string | null
          min_lease?: string | null
          min_price?: string | null
          monthly_income?: string | null
          monthly_income_currency?: string | null
          move_in_date?: string | null
          moving_reason?: string | null
          payment_ref?: number | null
          phone?: string | null
          preferred_contact_method?: string | null
          preferred_payment_option?: string | null
          property_type?: string[] | null
          renter_id?: string
          search_title?: string | null
          tenants?: string | null
          title?: string | null
        }
        Update: {
          age?: string | null
          city?: string | null
          convicted?: boolean
          country?: string | null
          created_at?: string
          current_address_1?: string | null
          current_address_2?: string | null
          email?: string | null
          employer?: string | null
          employer_country?: string | null
          employment_status?: string | null
          evicted?: boolean
          features?: string[] | null
          first_name?: string | null
          has_pets?: boolean
          has_vehicles?: boolean
          id?: number
          is_paid?: boolean
          job_title?: string | null
          last_name?: string | null
          location?: Json[] | null
          marital_status?: string | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: string | null
          max_beds?: string | null
          max_lease?: string | null
          max_price?: string | null
          min_bathrooms?: string | null
          min_beds?: string | null
          min_lease?: string | null
          min_price?: string | null
          monthly_income?: string | null
          monthly_income_currency?: string | null
          move_in_date?: string | null
          moving_reason?: string | null
          payment_ref?: number | null
          phone?: string | null
          preferred_contact_method?: string | null
          preferred_payment_option?: string | null
          property_type?: string[] | null
          renter_id?: string
          search_title?: string | null
          tenants?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_criteria_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_request_payment_ref_fkey"
            columns: ["payment_ref"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_request_matches: {
        Row: {
          cancel_url: string | null
          completed_at: string | null
          created_at: string
          end_date: string | null
          id: number
          meeting_id: number | null
          property_id: number | null
          request_id: number | null
          reschedule_url: string | null
          start_date: string | null
          type: string | null
        }
        Insert: {
          cancel_url?: string | null
          completed_at?: string | null
          created_at?: string
          end_date?: string | null
          id?: number
          meeting_id?: number | null
          property_id?: number | null
          request_id?: number | null
          reschedule_url?: string | null
          start_date?: string | null
          type?: string | null
        }
        Update: {
          cancel_url?: string | null
          completed_at?: string | null
          created_at?: string
          end_date?: string | null
          id?: number
          meeting_id?: number | null
          property_id?: number | null
          request_id?: number | null
          reschedule_url?: string | null
          start_date?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_request_matches_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_request_matches_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_request_matches_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "agent_request"
            referencedColumns: ["id"]
          },
        ]
      }
      application_autosave: {
        Row: {
          created_at: string
          data: Json
          id: number
          property_id: number
          renter_id: number
        }
        Insert: {
          created_at?: string
          data: Json
          id?: number
          property_id: number
          renter_id: number
        }
        Update: {
          created_at?: string
          data?: Json
          id?: number
          property_id?: number
          renter_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "application_autosave_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_autosave_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_autosave_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      banned_users: {
        Row: {
          banned: boolean | null
          created_at: string
          id: number
          user: string | null
        }
        Insert: {
          banned?: boolean | null
          created_at?: string
          id?: number
          user?: string | null
        }
        Update: {
          banned?: boolean | null
          created_at?: string
          id?: number
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "banned_users_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      blocked_users: {
        Row: {
          block_id: string
          block_reason: string | null
          blocker: string
          created_at: string
          id: number
        }
        Insert: {
          block_id?: string
          block_reason?: string | null
          blocker?: string
          created_at?: string
          id?: number
        }
        Update: {
          block_id?: string
          block_reason?: string | null
          blocker?: string
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "blocked_users_block_id_fkey"
            columns: ["block_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_users_blocker_fkey"
            columns: ["blocker"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_threads: {
        Row: {
          created_at: string
          id: number
          user_1: string | null
          user_2: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_1?: string | null
          user_2?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_1?: string | null
          user_2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_threads_user_1_fkey"
            columns: ["user_1"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_threads_user_2_fkey"
            columns: ["user_2"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_owner_preference: {
        Row: {
          created_at: string
          id: number
          should_be_contacted: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          should_be_contacted?: boolean
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          should_be_contacted?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_contact_owner_preference_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_us: {
        Row: {
          company_name: string | null
          contact_type: string
          created_at: string
          email: string | null
          file_url: string | null
          fullname: string
          id: number
          message: string | null
          phone: string | null
          report_link: string | null
        }
        Insert: {
          company_name?: string | null
          contact_type?: string
          created_at?: string
          email?: string | null
          file_url?: string | null
          fullname: string
          id?: number
          message?: string | null
          phone?: string | null
          report_link?: string | null
        }
        Update: {
          company_name?: string | null
          contact_type?: string
          created_at?: string
          email?: string | null
          file_url?: string | null
          fullname?: string
          id?: number
          message?: string | null
          phone?: string | null
          report_link?: string | null
        }
        Relationships: []
      }
      cron_jobs: {
        Row: {
          created_at: string
          id: number
          name: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          status?: string | null
        }
        Relationships: []
      }
      customer_discounts: {
        Row: {
          code: string
          created_at: string
          email: string
          id: number
        }
        Insert: {
          code: string
          created_at?: string
          email: string
          id?: number
        }
        Update: {
          code?: string
          created_at?: string
          email?: string
          id?: number
        }
        Relationships: []
      }
      customer_product: {
        Row: {
          created_at: string
          customer: number | null
          date_added: string | null
          id: number
          is_paid: boolean | null
          product: number | null
        }
        Insert: {
          created_at?: string
          customer?: number | null
          date_added?: string | null
          id?: number
          is_paid?: boolean | null
          product?: number | null
        }
        Update: {
          created_at?: string
          customer?: number | null
          date_added?: string | null
          id?: number
          is_paid?: boolean | null
          product?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_product_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_product_product_fkey"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          company: string | null
          created_at: string
          customer_id: string
          email: string
          firstname: string | null
          id: number
          lastname: string | null
          phone: string | null
        }
        Insert: {
          address?: string | null
          company?: string | null
          created_at?: string
          customer_id: string
          email: string
          firstname?: string | null
          id?: number
          lastname?: string | null
          phone?: string | null
        }
        Update: {
          address?: string | null
          company?: string | null
          created_at?: string
          customer_id?: string
          email?: string
          firstname?: string | null
          id?: number
          lastname?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      discounts: {
        Row: {
          code: string
          created_at: string
          id: number
          rate: number
        }
        Insert: {
          code: string
          created_at?: string
          id?: number
          rate: number
        }
        Update: {
          code?: string
          created_at?: string
          id?: number
          rate?: number
        }
        Relationships: []
      }
      faq: {
        Row: {
          created_at: string
          email: string | null
          fullname: string | null
          id: number
          message: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          fullname?: string | null
          id?: number
          message?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          fullname?: string | null
          id?: number
          message?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      featured_properties: {
        Row: {
          created_at: string
          id: number
          property_id: number
          views: number
        }
        Insert: {
          created_at?: string
          id?: number
          property_id: number
          views?: number
        }
        Update: {
          created_at?: string
          id?: number
          property_id?: number
          views?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_featured_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_featured_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: true
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          created_at: string
          feedback_title: string | null
          id: number
          value_a: number | null
          value_b: number | null
          value_c: boolean | null
          value_d: string | null
        }
        Insert: {
          created_at?: string
          feedback_title?: string | null
          id?: number
          value_a?: number | null
          value_b?: number | null
          value_c?: boolean | null
          value_d?: string | null
        }
        Update: {
          created_at?: string
          feedback_title?: string | null
          id?: number
          value_a?: number | null
          value_b?: number | null
          value_c?: boolean | null
          value_d?: string | null
        }
        Relationships: []
      }
      hubtel_payments: {
        Row: {
          amount: number | null
          client_id: string
          created_at: string
          id: number
          paylink_id: string | null
          payment_type: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          client_id?: string
          created_at?: string
          id?: number
          paylink_id?: string | null
          payment_type?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          client_id?: string
          created_at?: string
          id?: number
          paylink_id?: string | null
          payment_type?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_hubtel_payments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          cost: number
          created_at: string
          description: string | null
          id: number
          invoice: number
          name: string
        }
        Insert: {
          cost: number
          created_at?: string
          description?: string | null
          id?: number
          invoice: number
          name: string
        }
        Update: {
          cost?: number
          created_at?: string
          description?: string | null
          id?: number
          invoice?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_fkey"
            columns: ["invoice"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          billing_date: string
          created_at: string
          customer: string
          id: number
          is_paid: boolean
          payment_ref: string | null
          service: string
          service_description: string | null
          tax_rate: number
        }
        Insert: {
          amount: number
          billing_date: string
          created_at?: string
          customer: string
          id?: number
          is_paid: boolean
          payment_ref?: string | null
          service: string
          service_description?: string | null
          tax_rate?: number
        }
        Update: {
          amount?: number
          billing_date?: string
          created_at?: string
          customer?: string
          id?: number
          is_paid?: boolean
          payment_ref?: string | null
          service?: string
          service_description?: string | null
          tax_rate?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoices_customer_fkey"
            columns: ["customer"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      join_us: {
        Row: {
          additional_link: string | null
          cover_letter_url: string
          created_at: string
          email: string
          firstname: string
          id: number
          job: string | null
          lastname: string
          phone: string
          resume_url: string
        }
        Insert: {
          additional_link?: string | null
          cover_letter_url: string
          created_at?: string
          email?: string
          firstname: string
          id?: number
          job?: string | null
          lastname: string
          phone?: string
          resume_url: string
        }
        Update: {
          additional_link?: string | null
          cover_letter_url?: string
          created_at?: string
          email?: string
          firstname?: string
          id?: number
          job?: string | null
          lastname?: string
          phone?: string
          resume_url?: string
        }
        Relationships: []
      }
      listing_autosave: {
        Row: {
          created_at: string
          data: Json
          id: number
          property_id: number
          renter_id: number
        }
        Insert: {
          created_at?: string
          data: Json
          id?: number
          property_id: number
          renter_id: number
        }
        Update: {
          created_at?: string
          data?: Json
          id?: number
          property_id?: number
          renter_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "listing_autosave_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_autosave_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listing_autosave_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string | null
          created_at: string
          id: number
          read_at: string | null
          sender_id: string | null
          thread_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          read_at?: string | null
          sender_id?: string | null
          thread_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          read_at?: string | null
          sender_id?: string | null
          thread_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "chat_threads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "thread_summary"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      notifications: {
        Row: {
          content: string | null
          created_at: string
          id: number
          read: boolean | null
          receiver_id: string
          sender_id: string | null
          sender_name: string
          sent: string | null
          subject: string | null
          type: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          read?: boolean | null
          receiver_id: string
          sender_id?: string | null
          sender_name?: string
          sent?: string | null
          subject?: string | null
          type?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          read?: boolean | null
          receiver_id?: string
          sender_id?: string | null
          sender_name?: string
          sent?: string | null
          subject?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          address: string | null
          address2: string | null
          amount: number
          cart_items: Json | null
          created_at: string
          email: string
          firstname: string
          id: number
          lastname: string
          phone: string
          reference: string
          status: string | null
        }
        Insert: {
          address?: string | null
          address2?: string | null
          amount: number
          cart_items?: Json | null
          created_at?: string
          email: string
          firstname: string
          id?: never
          lastname: string
          phone: string
          reference?: string
          status?: string | null
        }
        Update: {
          address?: string | null
          address2?: string | null
          amount?: number
          cart_items?: Json | null
          created_at?: string
          email?: string
          firstname?: string
          id?: never
          lastname?: string
          phone?: string
          reference?: string
          status?: string | null
        }
        Relationships: []
      }
      product_category: {
        Row: {
          category: string
          created_at: string
          id: number
        }
        Insert: {
          category: string
          created_at?: string
          id?: number
        }
        Update: {
          category?: string
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          condition: string
          created_at: string
          deletion_date: string | null
          description: string
          email: string | null
          id: number
          images: string[] | null
          inactive_date: string | null
          is_available: boolean
          is_deleted: boolean
          phone: string | null
          price: number
          primary_image: string | null
          seller: string
          status: string
          suspension_date: string | null
          term: string
          title: string
          views: number
          whatsapp: string | null
        }
        Insert: {
          category: string
          condition?: string
          created_at?: string
          deletion_date?: string | null
          description: string
          email?: string | null
          id?: number
          images?: string[] | null
          inactive_date?: string | null
          is_available?: boolean
          is_deleted?: boolean
          phone?: string | null
          price: number
          primary_image?: string | null
          seller: string
          status?: string
          suspension_date?: string | null
          term?: string
          title: string
          views?: number
          whatsapp?: string | null
        }
        Update: {
          category?: string
          condition?: string
          created_at?: string
          deletion_date?: string | null
          description?: string
          email?: string | null
          id?: number
          images?: string[] | null
          inactive_date?: string | null
          is_available?: boolean
          is_deleted?: boolean
          phone?: string | null
          price?: number
          primary_image?: string | null
          seller?: string
          status?: string
          suspension_date?: string | null
          term?: string
          title?: string
          views?: number
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["category"]
          },
          {
            foreignKeyName: "products_seller_fkey"
            columns: ["seller"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_review: {
        Row: {
          created_at: string
          id: number
          recipient_id: string | null
          review_text: string | null
          review_value: number | null
          sender_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          recipient_id?: string | null
          review_text?: string | null
          review_value?: number | null
          sender_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          recipient_id?: string | null
          review_text?: string | null
          review_value?: number | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_review_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_review_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          country: string | null
          facebook: string | null
          firstname: string | null
          full_name: string | null
          id: string
          is_admin: boolean
          is_banned: boolean
          is_certified: boolean
          is_first_time: boolean
          lastname: string | null
          linkedin: string | null
          phone: string | null
          profile_img: string | null
          review: number | null
          twitter: string | null
          updated_at: string | null
          whatsapp: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          country?: string | null
          facebook?: string | null
          firstname?: string | null
          full_name?: string | null
          id: string
          is_admin?: boolean
          is_banned?: boolean
          is_certified?: boolean
          is_first_time?: boolean
          lastname?: string | null
          linkedin?: string | null
          phone?: string | null
          profile_img?: string | null
          review?: number | null
          twitter?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          country?: string | null
          facebook?: string | null
          firstname?: string | null
          full_name?: string | null
          id?: string
          is_admin?: boolean
          is_banned?: boolean
          is_certified?: boolean
          is_first_time?: boolean
          lastname?: string | null
          linkedin?: string | null
          phone?: string | null
          profile_img?: string | null
          review?: number | null
          twitter?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      property: {
        Row: {
          additional_fees: Json[] | null
          address: string | null
          agent_fee: number | null
          available_date: string | null
          banner_image: Json | null
          bathrooms: string | null
          bedrooms: string | null
          city: string | null
          created_at: string
          currency: string | null
          description: string | null
          digital_address: string | null
          favorite_user_ids: string[] | null
          features: string[] | null
          furnish_level: string | null
          gps: string
          id: number
          images: string[] | null
          incentives: string[] | null
          is_admin_approved: boolean
          is_admin_property: boolean
          is_archived: boolean
          is_available: boolean
          is_best_value: boolean
          is_complete: boolean
          is_featured: boolean
          is_lister_certified: boolean
          is_paid: boolean
          is_published: boolean
          is_realtors_choice: boolean
          is_suspended: boolean
          is_verified: boolean
          lease_options: string[] | null
          monthly_amount: number | null
          neighbourhood: string | null
          owner_uid: string
          payment_terms: string
          price_drop: boolean
          property_name: string | null
          property_size: string | null
          property_type: string | null
          published_date: string | null
          query_string: string | null
          refundable_security_deposit: number | null
          renter_knowledge: string | null
          require_additional_fees: boolean
          require_agent_fee: boolean
          require_application_form: boolean
          require_refundable_security_deposit: boolean
          require_viewing_fee: boolean
          suited_for: string[] | null
          template_type: Database["public"]["Enums"]["template"]
          total_amount: number | null
          utilities: string[] | null
          utilities_included: string[] | null
          viewing_fee: number | null
        }
        Insert: {
          additional_fees?: Json[] | null
          address?: string | null
          agent_fee?: number | null
          available_date?: string | null
          banner_image?: Json | null
          bathrooms?: string | null
          bedrooms?: string | null
          city?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features?: string[] | null
          furnish_level?: string | null
          gps?: string
          id?: number
          images?: string[] | null
          incentives?: string[] | null
          is_admin_approved?: boolean
          is_admin_property?: boolean
          is_archived?: boolean
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
          is_lister_certified?: boolean
          is_paid?: boolean
          is_published?: boolean
          is_realtors_choice?: boolean
          is_suspended?: boolean
          is_verified?: boolean
          lease_options?: string[] | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid: string
          payment_terms?: string
          price_drop?: boolean
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          published_date?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean
          require_agent_fee?: boolean
          require_application_form?: boolean
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"]
          total_amount?: number | null
          utilities?: string[] | null
          utilities_included?: string[] | null
          viewing_fee?: number | null
        }
        Update: {
          additional_fees?: Json[] | null
          address?: string | null
          agent_fee?: number | null
          available_date?: string | null
          banner_image?: Json | null
          bathrooms?: string | null
          bedrooms?: string | null
          city?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features?: string[] | null
          furnish_level?: string | null
          gps?: string
          id?: number
          images?: string[] | null
          incentives?: string[] | null
          is_admin_approved?: boolean
          is_admin_property?: boolean
          is_archived?: boolean
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
          is_lister_certified?: boolean
          is_paid?: boolean
          is_published?: boolean
          is_realtors_choice?: boolean
          is_suspended?: boolean
          is_verified?: boolean
          lease_options?: string[] | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string
          payment_terms?: string
          price_drop?: boolean
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          published_date?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean
          require_agent_fee?: boolean
          require_application_form?: boolean
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"]
          total_amount?: number | null
          utilities?: string[] | null
          utilities_included?: string[] | null
          viewing_fee?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      property_application: {
        Row: {
          address: string | null
          applicants: string[] | null
          city: string | null
          contact_mode: string | null
          country: string | null
          created_at: string
          digital_address: string | null
          email: string
          family_size: number | null
          firstname: string
          gender: string
          house_number: string | null
          id: number
          is_archived: boolean | null
          is_submitted: boolean
          isAdditionalApplicants: boolean | null
          lastname: string
          lease_term: number | null
          marital_status: string
          monthly_income: number | null
          move_in_date: string | null
          occupattion: string | null
          phone: string | null
          property: number | null
          purpose: string | null
          status: string
          user: string | null
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          applicants?: string[] | null
          city?: string | null
          contact_mode?: string | null
          country?: string | null
          created_at?: string
          digital_address?: string | null
          email: string
          family_size?: number | null
          firstname: string
          gender: string
          house_number?: string | null
          id?: number
          is_archived?: boolean | null
          is_submitted?: boolean
          isAdditionalApplicants?: boolean | null
          lastname: string
          lease_term?: number | null
          marital_status: string
          monthly_income?: number | null
          move_in_date?: string | null
          occupattion?: string | null
          phone?: string | null
          property?: number | null
          purpose?: string | null
          status?: string
          user?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          applicants?: string[] | null
          city?: string | null
          contact_mode?: string | null
          country?: string | null
          created_at?: string
          digital_address?: string | null
          email?: string
          family_size?: number | null
          firstname?: string
          gender?: string
          house_number?: string | null
          id?: number
          is_archived?: boolean | null
          is_submitted?: boolean
          isAdditionalApplicants?: boolean | null
          lastname?: string
          lease_term?: number | null
          marital_status?: string
          monthly_income?: number | null
          move_in_date?: string | null
          occupattion?: string | null
          phone?: string | null
          property?: number | null
          purpose?: string | null
          status?: string
          user?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_application_property_fkey"
            columns: ["property"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_application_property_fkey"
            columns: ["property"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_application_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      property_available: {
        Row: {
          created_at: string
          id: number
          property_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          property_id: number
        }
        Update: {
          created_at?: string
          id?: number
          property_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "property_available_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_available_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_images: {
        Row: {
          caption: string | null
          created_at: string
          filename: string | null
          filesize: number | null
          id: number
          image_type: string | null
          mime_type: string | null
          property_id: number | null
          public_url: string | null
        }
        Insert: {
          caption?: string | null
          created_at?: string
          filename?: string | null
          filesize?: number | null
          id?: number
          image_type?: string | null
          mime_type?: string | null
          property_id?: number | null
          public_url?: string | null
        }
        Update: {
          caption?: string | null
          created_at?: string
          filename?: string | null
          filesize?: number | null
          id?: number
          image_type?: string | null
          mime_type?: string | null
          property_id?: number | null
          public_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_images_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_images_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_owner_profile: {
        Row: {
          created_at: string
          id: number
          listings: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          listings?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          listings?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_owner_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      property_reviews: {
        Row: {
          created_at: string
          id: number
          property: number | null
          rating: number | null
          review: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          property?: number | null
          rating?: number | null
          review?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          property?: number | null
          rating?: number | null
          review?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_reviews_property_fkey"
            columns: ["property"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_property_reviews_property_fkey"
            columns: ["property"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
        ]
      }
      recently_viewed_properties: {
        Row: {
          created_at: string
          id: number
          property_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          property_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          property_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recently_viewed_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recently_viewed_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recently_viewed_properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      renter_profile: {
        Row: {
          active: boolean
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "renter_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      search_critieria: {
        Row: {
          created_at: string
          email: string | null
          features: string[] | null
          id: number
          is_active: boolean
          isBTFTK: boolean | null
          keywords: string | null
          location: string[] | null
          location_gps: string[] | null
          match_modified_at: string | null
          matched_properties: number[] | null
          max_bathrooms: string | null
          max_beds: string | null
          max_price: string | null
          min_bathrooms: string | null
          min_beds: string | null
          min_price: string | null
          phone: string | null
          preferred_contact_method: string | null
          property_type: string[] | null
          renter_id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          features?: string[] | null
          id?: number
          is_active?: boolean
          isBTFTK?: boolean | null
          keywords?: string | null
          location?: string[] | null
          location_gps?: string[] | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: string | null
          max_beds?: string | null
          max_price?: string | null
          min_bathrooms?: string | null
          min_beds?: string | null
          min_price?: string | null
          phone?: string | null
          preferred_contact_method?: string | null
          property_type?: string[] | null
          renter_id: string
          title?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          features?: string[] | null
          id?: number
          is_active?: boolean
          isBTFTK?: boolean | null
          keywords?: string | null
          location?: string[] | null
          location_gps?: string[] | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: string | null
          max_beds?: string | null
          max_price?: string | null
          min_bathrooms?: string | null
          min_beds?: string | null
          min_price?: string | null
          phone?: string | null
          preferred_contact_method?: string | null
          property_type?: string[] | null
          renter_id?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_critieria_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          campaign: string | null
          contact: string
          contact_is_email: boolean
          created_at: string
          id: number
          subscribed: boolean | null
        }
        Insert: {
          campaign?: string | null
          contact: string
          contact_is_email: boolean
          created_at?: string
          id?: number
          subscribed?: boolean | null
        }
        Update: {
          campaign?: string | null
          contact?: string
          contact_is_email?: boolean
          created_at?: string
          id?: number
          subscribed?: boolean | null
        }
        Relationships: []
      }
      user_favorite_properties: {
        Row: {
          created_at: string
          id: number
          property_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          property_id: number
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          property_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_user_favorite_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_favorite_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "published_properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_favorite_properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      published_properties: {
        Row: {
          additional_fees: Json[] | null
          address: string | null
          agent_fee: number | null
          available_date: string | null
          banner_image: Json | null
          bathrooms: string | null
          bedrooms: string | null
          city: string | null
          created_at: string | null
          currency: string | null
          description: string | null
          digital_address: string | null
          favorite_user_ids: string[] | null
          features: string[] | null
          furnish_level: string | null
          gps: string | null
          id: number | null
          images: string[] | null
          incentives: string[] | null
          is_admin_approved: boolean | null
          is_admin_property: boolean | null
          is_archived: boolean | null
          is_available: boolean | null
          is_best_value: boolean | null
          is_complete: boolean | null
          is_featured: boolean | null
          is_lister_certified: boolean | null
          is_paid: boolean | null
          is_published: boolean | null
          is_realtors_choice: boolean | null
          is_suspended: boolean | null
          is_verified: boolean | null
          lease_options: string[] | null
          monthly_amount: number | null
          neighbourhood: string | null
          owner_uid: string | null
          payment_terms: string | null
          price_drop: boolean | null
          property_name: string | null
          property_size: string | null
          property_type: string | null
          published_date: string | null
          query_string: string | null
          refundable_security_deposit: number | null
          renter_knowledge: string | null
          require_additional_fees: boolean | null
          require_agent_fee: boolean | null
          require_application_form: boolean | null
          require_refundable_security_deposit: boolean | null
          require_viewing_fee: boolean | null
          suited_for: string[] | null
          template_type: Database["public"]["Enums"]["template"] | null
          total_amount: number | null
          utilities: string[] | null
          utilities_included: string[] | null
          viewing_fee: number | null
        }
        Insert: {
          additional_fees?: Json[] | null
          address?: string | null
          agent_fee?: number | null
          available_date?: string | null
          banner_image?: Json | null
          bathrooms?: string | null
          bedrooms?: string | null
          city?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features?: string[] | null
          furnish_level?: string | null
          gps?: string | null
          id?: number | null
          images?: string[] | null
          incentives?: string[] | null
          is_admin_approved?: boolean | null
          is_admin_property?: boolean | null
          is_archived?: boolean | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_suspended?: boolean | null
          is_verified?: boolean | null
          lease_options?: string[] | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          payment_terms?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          published_date?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          utilities_included?: string[] | null
          viewing_fee?: number | null
        }
        Update: {
          additional_fees?: Json[] | null
          address?: string | null
          agent_fee?: number | null
          available_date?: string | null
          banner_image?: Json | null
          bathrooms?: string | null
          bedrooms?: string | null
          city?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features?: string[] | null
          furnish_level?: string | null
          gps?: string | null
          id?: number | null
          images?: string[] | null
          incentives?: string[] | null
          is_admin_approved?: boolean | null
          is_admin_property?: boolean | null
          is_archived?: boolean | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_suspended?: boolean | null
          is_verified?: boolean | null
          lease_options?: string[] | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          payment_terms?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          published_date?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          utilities_included?: string[] | null
          viewing_fee?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      thread_summary: {
        Row: {
          last_message_content: string | null
          thread_id: number | null
          unread_message_count: number | null
          user_1_id: string | null
          user_1_object: Json | null
          user_2_id: string | null
          user_2_object: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_threads_user_1_fkey"
            columns: ["user_1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_threads_user_2_fkey"
            columns: ["user_2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      archive_old_products: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      count_properties_by_publish_status_per_month: {
        Args: {
          year_input: number
        }
        Returns: {
          month: number
          published_count: number
          unpublished_count: number
        }[]
      }
      count_properties_by_status_per_month: {
        Args: {
          year_input: number
        }
        Returns: {
          month: number
          active_count: number
          inactive_count: number
        }[]
      }
      count_properties_per_month: {
        Args: {
          year_input: number
        }
        Returns: {
          month: number
          property_count: number
        }[]
      }
      generate_random_alphanumeric: {
        Args: {
          length: number
        }
        Returns: string
      }
      get_all_properties: {
        Args: {
          filter?: string
          search?: string
          type?: string
        }
        Returns: {
          id: number
          property_name: string
          property_type: string
          bedrooms: string
          city: string
          neighbourhood: string
          monthly_amount: number
          payment_terms: string
          lease_options: string[]
          viewing_fee: number
          currency: string
          banner_image: Json
          images: string[]
          favorite_user_ids: string[]
          is_realtors_choice: boolean
          is_best_value: boolean
          is_featured: boolean
          is_verified: boolean
          is_lister_certified: boolean
          created_at: string
        }[]
      }
      get_lister_properties: {
        Args: {
          user_id?: string
          status?: string
          archived?: boolean
        }
        Returns: {
          id: number
          property_name: string
          property_type: string
          bedrooms: string
          city: string
          neighbourhood: string
          monthly_amount: number
          currency: string
          banner_image: Json
          payment_terms: string
          is_complete: boolean
          is_realtors_choice: boolean
          is_best_value: boolean
          is_featured: boolean
          is_published: boolean
          is_suspended: boolean
          is_admin_approved: boolean
          is_archived: boolean
          published_date: string
          created_at: string
          owner_uid: string
        }[]
      }
      get_matching_properties: {
        Args: {
          criteria_id: number
        }
        Returns: {
          id: number
          property_name: string
          property_type: string
          property_size: string
          bedrooms: string
          bathrooms: string
          city: string
          total_amount: number
          monthly_amount: number
          features: string[]
          is_verified: boolean
          is_available: boolean
          is_published: boolean
          currency: string
        }[]
      }
      get_monthly_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_revenue: number
          revenue_percentage_increase: number
          profiles_created: number
          profiles_percentage_increase: number
          unpaid_invoices_total: number
          unpaid_invoices_percentage_increase: number
          active_supabase_connections: number
          active_listed_properties: number
          active_listed_properties_percentage_increase: number
        }[]
      }
      get_payments_and_count: {
        Args: {
          month: number
          year: number
        }
        Returns: {
          total_payments: number
          payments_with_avatars: Json
        }[]
      }
      get_payments_with_avatar: {
        Args: {
          year_input: number
          month_input: number
        }
        Returns: {
          payment_id: number
          created_at: string
          firstname: string
          lastname: string
          email: string
          amount: number
          phone: string
          reference: string
          status: string
          address: string
          address2: string
          cart_items: Json
          avatar_url: string
          payment_count: number
        }[]
      }
      get_random_featured_properties:
        | {
            Args: {
              limit_value?: number
            }
            Returns: {
              id: number
              created_at: string
              is_verified: boolean
              is_best_value: boolean
              is_realtors_choice: boolean
              is_featured: boolean
              property_type: string
              property_name: string
              bedrooms: string
              bathrooms: string
              city: string
              lease_duration: string
              total_amount: number
              agent_fee: number
              monthly_amount: number
              payment_terms: string
              require_viewing_fee: boolean
              viewing_fee: number
              neighbourhood: string
              price_drop: boolean
              favorite_user_ids: string[]
              is_lister_certified: boolean
              currency: string
              banner_image: Json
              images: string[]
            }[]
          }
        | {
            Args: {
              limit_value?: number
              type?: string
            }
            Returns: {
              id: number
              created_at: string
              is_verified: boolean
              is_best_value: boolean
              is_realtors_choice: boolean
              is_featured: boolean
              property_type: string
              property_name: string
              bedrooms: string
              bathrooms: string
              city: string
              lease_options: string[]
              total_amount: number
              agent_fee: number
              monthly_amount: number
              payment_terms: string
              require_viewing_fee: boolean
              viewing_fee: number
              neighbourhood: string
              price_drop: boolean
              favorite_user_ids: string[]
              is_lister_certified: boolean
              currency: string
              banner_image: Json
              images: string[]
            }[]
          }
      get_search_criteria: {
        Args: {
          user_id?: string
          status?: string
        }
        Returns: {
          id: number
          title: string
          location: string[]
          created_at: string
          is_active: boolean
          renter_id: string
          matched_properties: number[]
        }[]
      }
      increment_property_views: {
        Args: {
          propertyid: number
        }
        Returns: undefined
      }
      insert_customer: {
        Args: {
          p_full_name: string
          p_email: string
          p_phone: string
          p_customer_id: string
          p_firstname: string
          p_lastname: string
          p_company: string
          p_address: string
        }
        Returns: undefined
      }
      update_invoices_is_paid: {
        Args: {
          invoice_ids: number[]
          new_is_paid: boolean
        }
        Returns: undefined
      }
      update_invoices_is_paid_and_reference: {
        Args: {
          invoice_ids: number[]
          new_is_paid: boolean
          new_payment_reference: string
        }
        Returns: undefined
      }
    }
    Enums: {
      template: "STANDARD" | "PROFESSIONAL"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
