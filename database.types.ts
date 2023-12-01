export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
            referencedRelation: "property"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_autosave_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          }
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
            foreignKeyName: "listing_autosave_renter_id_fkey"
            columns: ["renter_id"]
            isOneToOne: false
            referencedRelation: "renter_profile"
            referencedColumns: ["id"]
          }
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
            referencedRelation: "distinct_messages"
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
            referencedRelation: "distinct_messages"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      notifications: {
        Row: {
          content: string | null
          created_at: string
          id: number
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
            referencedRelation: "distinct_messages"
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
            referencedRelation: "distinct_messages"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          code: string | null
          country: string | null
          facebook: string | null
          firstname: string | null
          full_name: string | null
          id: string
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
          code?: string | null
          country?: string | null
          facebook?: string | null
          firstname?: string | null
          full_name?: string | null
          id: string
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
          code?: string | null
          country?: string | null
          facebook?: string | null
          firstname?: string | null
          full_name?: string | null
          id?: string
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
          }
        ]
      }
      property: {
        Row: {
          created_at: string
          id: number
          is_available: boolean
          is_paid_for: boolean
          is_published: boolean
          is_verified: boolean
          owner_uid: string | null
          status: string
          template_id: number | null
          template_type: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_available?: boolean
          is_paid_for?: boolean
          is_published?: boolean
          is_verified?: boolean
          owner_uid?: string | null
          status?: string
          template_id?: number | null
          template_type?: string
        }
        Update: {
          created_at?: string
          id?: number
          is_available?: boolean
          is_paid_for?: boolean
          is_published?: boolean
          is_verified?: boolean
          owner_uid?: string | null
          status?: string
          template_id?: number | null
          template_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_owner_uid_fkey"
            columns: ["owner_uid"]
            isOneToOne: false
            referencedRelation: "property_owner_profile"
            referencedColumns: ["user_id"]
          }
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
          }
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
          }
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
            referencedRelation: "distinct_messages"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "property_owner_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
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
            referencedRelation: "distinct_messages"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "renter_profile_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
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
          }
        ]
      }
      standard_template: {
        Row: {
          additional_fees: Json | null
          address: string | null
          advance_payment_options: Json[] | null
          advance_period: number | null
          agent_fee: string | null
          available_date: string | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          created_at: string
          description: string | null
          digital_address: string | null
          features_and_amenities: Json[] | null
          furnish_level: string | null
          id: number
          is_complete: boolean | null
          lease_details: string | null
          lease_end_date: string | null
          lease_length: number | null
          lease_start_date: string | null
          lease_type: string | null
          monthly_amount: string | null
          neighbourhood: string | null
          property_id: number | null
          property_name: string | null
          property_size: string | null
          property_type: string | null
          refundable_security_deposit: string | null
          renter_knowledge: string | null
          require_additional_fees: boolean | null
          require_advance_payment: boolean | null
          require_agent_fee: boolean | null
          require_application_form: boolean | null
          require_refundable_security_deposit: boolean | null
          require_viewing_fee: boolean | null
          suited_for: Json[] | null
          total_amount: string | null
          utilities: string | null
          viewing_fee: number | null
        }
        Insert: {
          additional_fees?: Json | null
          address?: string | null
          advance_payment_options?: Json[] | null
          advance_period?: number | null
          agent_fee?: string | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string
          description?: string | null
          digital_address?: string | null
          features_and_amenities?: Json[] | null
          furnish_level?: string | null
          id?: number
          is_complete?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: string | null
          neighbourhood?: string | null
          property_id?: number | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          refundable_security_deposit?: string | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          suited_for?: Json[] | null
          total_amount?: string | null
          utilities?: string | null
          viewing_fee?: number | null
        }
        Update: {
          additional_fees?: Json | null
          address?: string | null
          advance_payment_options?: Json[] | null
          advance_period?: number | null
          agent_fee?: string | null
          available_date?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string
          description?: string | null
          digital_address?: string | null
          features_and_amenities?: Json[] | null
          furnish_level?: string | null
          id?: number
          is_complete?: boolean | null
          lease_details?: string | null
          lease_end_date?: string | null
          lease_length?: number | null
          lease_start_date?: string | null
          lease_type?: string | null
          monthly_amount?: string | null
          neighbourhood?: string | null
          property_id?: number | null
          property_name?: string | null
          property_size?: string | null
          property_type?: string | null
          refundable_security_deposit?: string | null
          renter_knowledge?: string | null
          require_additional_fees?: boolean | null
          require_advance_payment?: boolean | null
          require_agent_fee?: boolean | null
          require_application_form?: boolean | null
          require_refundable_security_deposit?: boolean | null
          require_viewing_fee?: boolean | null
          suited_for?: Json[] | null
          total_amount?: string | null
          utilities?: string | null
          viewing_fee?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "standard_template_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "property"
            referencedColumns: ["id"]
          }
        ]
      }
      subscribers: {
        Row: {
          contact: string
          contact_is_email: boolean
          created_at: string
          id: number
        }
        Insert: {
          contact: string
          contact_is_email: boolean
          created_at?: string
          id?: number
        }
        Update: {
          contact?: string
          contact_is_email?: boolean
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      distinct_messages: {
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
            referencedRelation: "distinct_messages"
            referencedColumns: ["sender_id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["sender_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
