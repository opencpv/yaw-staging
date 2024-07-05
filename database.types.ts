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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
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
      blocked_users: {
        Row: {
          block_reason: string | null
          blocked_id: string
          blocker_id: string
          created_at: string
          id: number
        }
        Insert: {
          block_reason?: string | null
          blocked_id?: string
          blocker_id?: string
          created_at?: string
          id?: number
        }
        Update: {
          block_reason?: string | null
          blocked_id?: string
          blocker_id?: string
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "blocked_users_blocked_id_fkey"
            columns: ["blocked_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "blocked_users_blocked_id_fkey"
            columns: ["blocked_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blocked_users_blocker_id_fkey"
            columns: ["blocker_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "blocked_users_blocker_id_fkey"
            columns: ["blocker_id"]
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
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
          content: string
          created_at: string
          id: number
          recipient_id: string | null
          sender_id: string | null
          sent_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          recipient_id?: string | null
          sender_id?: string | null
          sent_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
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
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          country: string | null
          facebook: string | null
          firstname: string | null
          full_name: string | null
          id: string
          is_banned: boolean
          is_certified: boolean
          is_first_time: boolean
          lastname: string | null
          linkedin: string | null
          phone: string | null
          profile_img: string | null
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
          is_banned?: boolean
          is_certified?: boolean
          is_first_time?: boolean
          lastname?: string | null
          linkedin?: string | null
          phone?: string | null
          profile_img?: string | null
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
          is_banned?: boolean
          is_certified?: boolean
          is_first_time?: boolean
          lastname?: string | null
          linkedin?: string | null
          phone?: string | null
          profile_img?: string | null
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
          additional_fees: Json[]
          address: string
          advance_period: number | null
          agent_fee: number | null
          available_date: string | null
          bathrooms: number
          bedrooms: number
          city: string
          created_at: string
          description: string | null
          digital_address: string
          favorite_user_ids: string[] | null
          features_and_amenities: string[] | null
          furnish_level: string
          id: number
          images: string[] | null
          is_available: boolean
          is_best_value: boolean
          is_complete: boolean
          is_featured: boolean
          is_lister_certified: boolean
          is_paid_for: boolean
          is_published: boolean
          is_realtors_choice: boolean
          is_verified: boolean
          lease_details: string | null
          lease_end_date: string
          lease_length: number
          lease_start_date: string
          lease_type: string
          monthly_amount: number
          neighbourhood: string | null
          owner_uid: string | null
          price_drop: boolean
          property_name: string
          property_size: string
          property_type: string
          query_string: string | null
          refundable_security_deposit: number | null
          renter_knowledge: string
          require_additional_fees: boolean
          require_advance_payment: boolean
          require_agent_fee: boolean
          require_application_form: boolean
          require_refundable_security_deposit: boolean
          require_viewing_fee: boolean
          status: string
          subtitle: string
          suited_for: string[]
          template_type: Database["public"]["Enums"]["template"]
          total_amount: number
          utilities: string[]
          viewing_fee: number | null
          vr_tour_url: string | null
        }
        Insert: {
          additional_fees?: Json[]
          address: string
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms: number
          bedrooms: number
          city: string
          created_at?: string
          description?: string | null
          digital_address: string
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level: string
          id?: number
          images?: string[] | null
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
          is_lister_certified?: boolean
          is_paid_for?: boolean
          is_published?: boolean
          is_realtors_choice?: boolean
          is_verified?: boolean
          lease_details?: string | null
          lease_end_date: string
          lease_length: number
          lease_start_date: string
          lease_type: string
          monthly_amount: number
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean
          property_name: string
          property_size: string
          property_type?: string
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge: string
          require_additional_fees?: boolean
          require_advance_payment?: boolean
          require_agent_fee?: boolean
          require_application_form?: boolean
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          status?: string
          subtitle: string
          suited_for: string[]
          template_type?: Database["public"]["Enums"]["template"]
          total_amount: number
          utilities: string[]
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Update: {
          additional_fees?: Json[]
          address?: string
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms?: number
          bedrooms?: number
          city?: string
          created_at?: string
          description?: string | null
          digital_address?: string
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level?: string
          id?: number
          images?: string[] | null
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
          is_lister_certified?: boolean
          is_paid_for?: boolean
          is_published?: boolean
          is_realtors_choice?: boolean
          is_verified?: boolean
          lease_details?: string | null
          lease_end_date?: string
          lease_length?: number
          lease_start_date?: string
          lease_type?: string
          monthly_amount?: number
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean
          property_name?: string
          property_size?: string
          property_type?: string
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string
          require_additional_fees?: boolean
          require_advance_payment?: boolean
          require_agent_fee?: boolean
          require_application_form?: boolean
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          status?: string
          subtitle?: string
          suited_for?: string[]
          template_type?: Database["public"]["Enums"]["template"]
          total_amount?: number
          utilities?: string[]
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
            referencedColumns: ["id"]
          },
        ]
      }
      regular_application: {
        Row: {
          additional_information: string | null
          address: string
          address_2: string | null
          contact_method: string | null
          created_at: string
          email: string
          employment_status: string | null
          firstname: string
          gender: string
          id: number
          is_more_applicants: boolean | null
          is_whatsapp: string
          lastname: string
          lease_term: number | null
          marital_status: string
          more_applicants: Json | null
          move_in_date: string | null
          phone: string
        }
        Insert: {
          additional_information?: string | null
          address: string
          address_2?: string | null
          contact_method?: string | null
          created_at?: string
          email: string
          employment_status?: string | null
          firstname: string
          gender: string
          id?: number
          is_more_applicants?: boolean | null
          is_whatsapp: string
          lastname: string
          lease_term?: number | null
          marital_status: string
          more_applicants?: Json | null
          move_in_date?: string | null
          phone: string
        }
        Update: {
          additional_information?: string | null
          address?: string
          address_2?: string | null
          contact_method?: string | null
          created_at?: string
          email?: string
          employment_status?: string | null
          firstname?: string
          gender?: string
          id?: number
          is_more_applicants?: boolean | null
          is_whatsapp?: string
          lastname?: string
          lease_term?: number | null
          marital_status?: string
          more_applicants?: Json | null
          move_in_date?: string | null
          phone?: string
        }
        Relationships: []
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
          keywords: string | null
          location: string[] | null
          match_modified_at: string | null
          matched_properties: number[] | null
          max_bathrooms: number | null
          max_beds: number | null
          max_price: number | null
          min_bathrooms: number | null
          min_beds: number | null
          min_price: number | null
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
          keywords?: string | null
          location?: string[] | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: number | null
          max_beds?: number | null
          max_price?: number | null
          min_bathrooms?: number | null
          min_beds?: number | null
          min_price?: number | null
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
          keywords?: string | null
          location?: string[] | null
          match_modified_at?: string | null
          matched_properties?: number[] | null
          max_bathrooms?: number | null
          max_beds?: number | null
          max_price?: number | null
          min_bathrooms?: number | null
          min_beds?: number | null
          min_price?: number | null
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
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
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
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "random_featured_properties_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_favorite_properties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
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
      distinct_messages_view: {
        Row: {
          content: string | null
          created_at: string | null
          recipient_full_name: string | null
          recipient_id: string | null
          recipient_profile_img: string | null
          sender_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["sender_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      merged_property_view: {
        Row: {
          additional_fees: Json[] | null
          address: string | null
          advance_period: number | null
          agent_fee: number | null
          available_date: string | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          created_at: string | null
          description: string | null
          digital_address: string | null
          favorite_user_ids: string[] | null
          features_and_amenities: string[] | null
          furnish_level: string | null
          id: number | null
          images: string[] | null
          is_available: boolean | null
          is_best_value: boolean | null
          is_complete: boolean | null
          is_featured: boolean | null
          is_lister_certified: boolean | null
          is_paid_for: boolean | null
          is_published: boolean | null
          is_realtors_choice: boolean | null
          is_verified: boolean | null
          lease_details: string | null
          lease_end_date: string | null
          lease_length: number | null
          lease_start_date: string | null
          lease_type: string | null
          monthly_amount: number | null
          neighbourhood: string | null
          owner_uid: string | null
          price_drop: boolean | null
          property_name: string | null
          property_size: string | null
          property_type: string | null
          query_string: string | null
          refundable_security_deposit: number | null
          renter_knowledge: string | null
          require_additional_fees: boolean | null
          require_advance_payment: boolean | null
          require_agent_fee: boolean | null
          require_application_form: boolean | null
          require_refundable_security_deposit: boolean | null
          require_viewing_fee: boolean | null
          status: string | null
          subtitle: string | null
          suited_for: string[] | null
          template_type: Database["public"]["Enums"]["template"] | null
          total_amount: number | null
          utilities: string[] | null
          viewing_fee: number | null
          vr_tour_url: string | null
        }
        Insert: {
          additional_fees?: Json[] | null
          address?: string | null
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level?: string | null
          id?: number | null
          images?: string[] | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid_for?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_verified?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          status?: string | null
          subtitle?: string | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Update: {
          additional_fees?: Json[] | null
          address?: string | null
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level?: string | null
          id?: number | null
          images?: string[] | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid_for?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_verified?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          status?: string | null
          subtitle?: string | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
        ]
      }
      random_featured_properties_view: {
        Row: {
          additional_fees: Json[] | null
          address: string | null
          advance_period: number | null
          agent_fee: number | null
          available_date: string | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          created_at: string | null
          description: string | null
          digital_address: string | null
          favorite_user_ids: string[] | null
          features_and_amenities: string[] | null
          furnish_level: string | null
          id: number | null
          is_available: boolean | null
          is_best_value: boolean | null
          is_complete: boolean | null
          is_featured: boolean | null
          is_lister_certified: boolean | null
          is_paid_for: boolean | null
          is_published: boolean | null
          is_realtors_choice: boolean | null
          is_verified: boolean | null
          lease_details: string | null
          lease_end_date: string | null
          lease_length: number | null
          lease_start_date: string | null
          lease_type: string | null
          monthly_amount: number | null
          neighbourhood: string | null
          owner_uid: string | null
          price_drop: boolean | null
          property_name: string | null
          property_size: string | null
          property_type: string | null
          query_string: string | null
          refundable_security_deposit: number | null
          renter_knowledge: string | null
          require_additional_fees: boolean | null
          require_advance_payment: boolean | null
          require_agent_fee: boolean | null
          require_application_form: boolean | null
          require_refundable_security_deposit: boolean | null
          require_viewing_fee: boolean | null
          status: string | null
          subtitle: string | null
          suited_for: string[] | null
          template_type: Database["public"]["Enums"]["template"] | null
          total_amount: number | null
          utilities: string[] | null
          viewing_fee: number | null
          vr_tour_url: string | null
        }
        Insert: {
          additional_fees?: Json[] | null
          address?: string | null
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level?: string | null
          id?: number | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid_for?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_verified?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          status?: string | null
          subtitle?: string | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Update: {
          additional_fees?: Json[] | null
          address?: string | null
          advance_period?: number | null
          agent_fee?: number | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          digital_address?: string | null
          favorite_user_ids?: string[] | null
          features_and_amenities?: string[] | null
          furnish_level?: string | null
          id?: number | null
          is_available?: boolean | null
          is_best_value?: boolean | null
          is_complete?: boolean | null
          is_featured?: boolean | null
          is_lister_certified?: boolean | null
          is_paid_for?: boolean | null
          is_published?: boolean | null
          is_realtors_choice?: boolean | null
          is_verified?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: number | null
          neighbourhood?: string | null
          owner_uid?: string | null
          price_drop?: boolean | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          query_string?: string | null
          refundable_security_deposit?: number | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          status?: string | null
          subtitle?: string | null
          suited_for?: string[] | null
          template_type?: Database["public"]["Enums"]["template"] | null
          total_amount?: number | null
          utilities?: string[] | null
          viewing_fee?: number | null
          vr_tour_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
        ]
      }
    }
    Functions: {
      archive_old_products: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      generate_random_alphanumeric: {
        Args: {
          length: number
        }
        Returns: string
      }
      get_random_featured_properties: {
        Args: {
          limit_value?: number
        }
        Returns: {
          id: number
          created_at: string
          is_verified: boolean
          status: string
          is_paid_for: boolean
          is_available: boolean
          is_published: boolean
          owner_uid: string
          is_best_value: boolean
          is_realtors_choice: boolean
          is_featured: boolean
          property_type: string
          property_name: string
          property_size: string
          description: string
          bedrooms: number
          bathrooms: number
          renter_knowledge: string
          address: string
          digital_address: string
          available_date: string
          city: string
          lease_type: string
          lease_start_date: string
          lease_end_date: string
          lease_length: number
          lease_details: string
          features_and_amenities: string[]
          total_amount: number
          agent_fee: number
          monthly_amount: number
          utilities: string[]
          advance_period: number
          require_refundable_security_deposit: boolean
          refundable_security_deposit: number
          require_agent_fee: boolean
          require_application_form: boolean
          require_viewing_fee: boolean
          viewing_fee: number
          require_additional_fees: boolean
          require_advance_payment: boolean
          additional_fees: Json[]
          furnish_level: string
          neighbourhood: string
          is_complete: boolean
          suited_for: string[]
          price_drop: boolean
          subtitle: string
          query_string: string
          favorite_user_ids: string[]
          vr_tour_url: string
          template_type: Database["public"]["Enums"]["template"]
          is_lister_certified: boolean
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
          property_type: string[]
          location: string[]
          min_price: number
          max_price: number
          min_beds: number
          max_beds: number
          min_bathrooms: number
          created_at: string
          is_active: boolean
          renter_id: string
          max_bathrooms: number
          email: string
          phone: string
          preferred_contact_method: string
          keywords: string
          features: string[]
          matched_properties: number[]
          match_modified_at: string
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
      template: "STANDARD" | "PREMIUM"
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
