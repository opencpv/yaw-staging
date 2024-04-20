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
            foreignKeyName: "application_autosave_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_owner_preference: {
        Row: {
          created_at: string
          id: number
          should_be_contacted: boolean
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          should_be_contacted?: boolean
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          should_be_contacted?: boolean
          user_id?: string | null
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
          contact_type: string | null
          created_at: string
          email: string | null
          file_url: string | null
          fullname: string
          id: number
          is_whatsapp: boolean | null
          message: string | null
          phone: string | null
          report_link: string | null
        }
        Insert: {
          company_name?: string | null
          contact_type?: string | null
          created_at?: string
          email?: string | null
          file_url?: string | null
          fullname: string
          id?: number
          is_whatsapp?: boolean | null
          message?: string | null
          phone?: string | null
          report_link?: string | null
        }
        Update: {
          company_name?: string | null
          contact_type?: string | null
          created_at?: string
          email?: string | null
          file_url?: string | null
          fullname?: string
          id?: number
          is_whatsapp?: boolean | null
          message?: string | null
          phone?: string | null
          report_link?: string | null
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
            foreignKeyName: "public_featured_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "merged_property_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_featured_properties_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
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
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          country: string | null
          facebook: string | null
          firstname: string | null
          full_name: string | null
          id: string
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
          advance_period: number
          agent_fee: number
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
          is_available: boolean
          is_best_value: boolean
          is_complete: boolean
          is_featured: boolean
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
          refundable_security_deposit: number
          renter_knowledge: string
          require_additional_fees: boolean
          require_advance_payment: boolean
          require_agent_fee: boolean | null
          require_application_form: boolean | null
          require_refundable_security_deposit: boolean
          require_viewing_fee: boolean
          status: string
          subtitle: string | null
          suited_for: string[]
          template_type: Database["public"]["Enums"]["template"]
          total_amount: number
          utilities: string[]
          viewing_fee: number
          vr_tour_url: string | null
        }
        Insert: {
          additional_fees?: Json[]
          address: string
          advance_period: number
          agent_fee?: number
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
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
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
          refundable_security_deposit?: number
          renter_knowledge: string
          require_additional_fees?: boolean
          require_advance_payment?: boolean
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          status?: string
          subtitle?: string | null
          suited_for: string[]
          template_type?: Database["public"]["Enums"]["template"]
          total_amount: number
          utilities: string[]
          viewing_fee?: number
          vr_tour_url?: string | null
        }
        Update: {
          additional_fees?: Json[]
          address?: string
          advance_period?: number
          agent_fee?: number
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
          is_available?: boolean
          is_best_value?: boolean
          is_complete?: boolean
          is_featured?: boolean
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
          refundable_security_deposit?: number
          renter_knowledge?: string
          require_additional_fees?: boolean
          require_advance_payment?: boolean
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean
          require_viewing_fee?: boolean
          status?: string
          subtitle?: string | null
          suited_for?: string[]
          template_type?: Database["public"]["Enums"]["template"]
          total_amount?: number
          utilities?: string[]
          viewing_fee?: number
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
          bathrooms: number | null
          car_spaces: number | null
          created_at: string
          id: number
          location: string | null
          max_beds: number | null
          max_price: number | null
          "min beds": number | null
          min_price: number | null
          property_type: string | null
          renter_id: number | null
          title: string | null
        }
        Insert: {
          bathrooms?: number | null
          car_spaces?: number | null
          created_at?: string
          id?: number
          location?: string | null
          max_beds?: number | null
          max_price?: number | null
          "min beds"?: number | null
          min_price?: number | null
          property_type?: string | null
          renter_id?: number | null
          title?: string | null
        }
        Update: {
          bathrooms?: number | null
          car_spaces?: number | null
          created_at?: string
          id?: number
          location?: string | null
          max_beds?: number | null
          max_price?: number | null
          "min beds"?: number | null
          min_price?: number | null
          property_type?: string | null
          renter_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "search_critieria_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          },
        ]
      }
      sell_items: {
        Row: {
          avaliable: boolean
          category: string
          condition: string
          created_at: string
          description: string
          id: number
          img_url: string
          negotiable: boolean | null
          phone: string
          price: number | null
          product_name: string
          user_id: string
        }
        Insert: {
          avaliable?: boolean
          category: string
          condition?: string
          created_at?: string
          description: string
          id?: number
          img_url: string
          negotiable?: boolean | null
          phone: string
          price?: number | null
          product_name: string
          user_id: string
        }
        Update: {
          avaliable?: boolean
          category?: string
          condition?: string
          created_at?: string
          description?: string
          id?: number
          img_url?: string
          negotiable?: boolean | null
          phone?: string
          price?: number | null
          product_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sell_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "distinct_messages_view"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "sell_items_user_id_fkey"
            columns: ["user_id"]
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
          is_available: boolean | null
          is_best_value: boolean | null
          is_complete: boolean | null
          is_featured: boolean | null
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
      update_lister_certification: {
        Args: Record<PropertyKey, never>
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
