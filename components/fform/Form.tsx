'use client';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const PhoneForm: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [state, handleSubmit] = useForm("mjkkezeg"); // Formspree React SDK kullanımı

    if (state.succeeded) {
        return <p className="text-green-600 font-bold">Form başarıyla gönderildi!</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phoneNumber: value });

        // +90 ile başlayıp hemen ardından 0 geliyorsa hata göster
        if (value.startsWith('+90') && value.slice(3, 4) === '0') {
            alert('Telefon numarası +90’dan sonra 0 ile başlayamaz.');
            setError('Telefon numarası +90’dan sonra 0 ile başlayamaz.');
        } else {
            setError('');
        }
    };

    return (
        <form id='form'
            className="text-center flex flex-col justify-center gap-3 px-4 py-4 bg-white shadow-lg rounded-lg border border-gray-200"
            onSubmit={handleSubmit}
        >
            <h3 className="text-left my-1 text-2xl font-bold text-gray-700">
                Form bırakın, biz sizi arayalım.
            </h3>

            <div>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Ad"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
            </div>

            <div>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Soyad"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-posta"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
                <PhoneInput
                    country={'tr'}
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    inputProps={{
                        name: 'phoneNumber',
                        required: true,
                        placeholder: 'Telefon Numarası',
                    }}
                    containerClass="phone-input-container"
                    inputClass="phone-input mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    buttonClass="phone-input-button"
                    dropdownClass="phone-input-dropdown"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Herhangi bir işlem için fiyat bilgisi almak veya diğer konularda bilgi edinmek isterseniz, lütfen sorunuzu buraya yazınız."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-4 rounded-md shadow-lg hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
                disabled={state.submitting}
            >
                Gönder
            </button>
        </form>
    );
};

export default PhoneForm;
